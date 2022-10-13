from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import importstatus_enum
from . import mergestrategy_enum
from . import importresourcespecification


@dataclass_json
@dataclass
class StartImportResponse:
    creation_date_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'creationDateTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    import_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'importId' }})
    import_status: Optional[importstatus_enum.ImportStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'importStatus' }})
    merge_strategy: Optional[mergestrategy_enum.MergeStrategyEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'mergeStrategy' }})
    resource_specification: Optional[importresourcespecification.ImportResourceSpecification] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'resourceSpecification' }})
    
