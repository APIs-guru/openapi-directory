from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import exportstatus_enum
from . import importexportfileformat_enum
from . import exportresourcespecification


@dataclass_json
@dataclass
class UpdateExportResponse:
    creation_date_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'creationDateTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    export_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'exportId' }})
    export_status: Optional[exportstatus_enum.ExportStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'exportStatus' }})
    file_format: Optional[importexportfileformat_enum.ImportExportFileFormatEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fileFormat' }})
    last_updated_date_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lastUpdatedDateTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    resource_specification: Optional[exportresourcespecification.ExportResourceSpecification] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'resourceSpecification' }})
    
