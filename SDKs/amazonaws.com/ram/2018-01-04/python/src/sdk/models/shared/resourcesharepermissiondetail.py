from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class ResourceSharePermissionDetail:
    arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'arn' }})
    creation_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'creationTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    default_version: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'defaultVersion' }})
    is_resource_type_default: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'isResourceTypeDefault' }})
    last_updated_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lastUpdatedTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    permission: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'permission' }})
    resource_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'resourceType' }})
    version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'version' }})
    
