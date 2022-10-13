from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import resourcelocation
from . import resourcetype_enum
from . import tag


@dataclass_json
@dataclass
class RelationalDatabaseSnapshot:
    arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'arn' }})
    created_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'createdAt', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    engine: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'engine' }})
    engine_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'engineVersion' }})
    from_relational_database_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fromRelationalDatabaseArn' }})
    from_relational_database_blueprint_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fromRelationalDatabaseBlueprintId' }})
    from_relational_database_bundle_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fromRelationalDatabaseBundleId' }})
    from_relational_database_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fromRelationalDatabaseName' }})
    location: Optional[resourcelocation.ResourceLocation] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'location' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    resource_type: Optional[resourcetype_enum.ResourceTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'resourceType' }})
    size_in_gb: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sizeInGb' }})
    state: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'state' }})
    support_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'supportCode' }})
    tags: Optional[List[tag.Tag]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tags' }})
    
