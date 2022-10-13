from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import simple_user


@dataclass_json
@dataclass
class EnvironmentApprovalsEnvironments:
    created_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'created_at', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    html_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'html_url' }})
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    node_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'node_id' }})
    updated_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'updated_at', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'url' }})
    
class EnvironmentApprovalsStateEnum(str, Enum):
    APPROVED = "approved"
    REJECTED = "rejected"


@dataclass_json
@dataclass
class EnvironmentApprovals:
    comment: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'comment' }})
    environments: List[EnvironmentApprovalsEnvironments] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'environments' }})
    state: EnvironmentApprovalsStateEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'state' }})
    user: simple_user.SimpleUser = field(default=None, metadata={'dataclasses_json': { 'field_name': 'user' }})
    
