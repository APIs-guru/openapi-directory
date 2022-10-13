from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import importstatus_enum
from . import mergestrategy_enum
from . import resourcetype_enum
from . import tag


@dataclass_json
@dataclass
class StartImportResponse:
    created_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'createdDate', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    import_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'importId' }})
    import_status: Optional[importstatus_enum.ImportStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'importStatus' }})
    merge_strategy: Optional[mergestrategy_enum.MergeStrategyEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'mergeStrategy' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    resource_type: Optional[resourcetype_enum.ResourceTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'resourceType' }})
    tags: Optional[List[tag.Tag]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tags' }})
    
