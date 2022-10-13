from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import importstatus_enum
from . import mergestrategy_enum


@dataclass_json
@dataclass
class ImportSummary:
    creation_date_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'creationDateTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    import_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'importId' }})
    import_status: Optional[importstatus_enum.ImportStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'importStatus' }})
    imported_resource_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'importedResourceId' }})
    imported_resource_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'importedResourceName' }})
    last_updated_date_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lastUpdatedDateTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    merge_strategy: Optional[mergestrategy_enum.MergeStrategyEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'mergeStrategy' }})
    
