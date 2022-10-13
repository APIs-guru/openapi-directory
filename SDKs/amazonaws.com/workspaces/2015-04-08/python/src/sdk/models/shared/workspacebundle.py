from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from . import computetype
from . import rootstorage
from . import userstorage


@dataclass_json
@dataclass
class WorkspaceBundle:
    bundle_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'BundleId' }})
    compute_type: Optional[computetype.ComputeType] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ComputeType' }})
    creation_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CreationTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Description' }})
    image_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ImageId' }})
    last_updated_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LastUpdatedTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Name' }})
    owner: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Owner' }})
    root_storage: Optional[rootstorage.RootStorage] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RootStorage' }})
    user_storage: Optional[userstorage.UserStorage] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'UserStorage' }})
    
