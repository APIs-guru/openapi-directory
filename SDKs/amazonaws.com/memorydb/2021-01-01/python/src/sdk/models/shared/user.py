from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import authentication


@dataclass_json
@dataclass
class User:
    acl_names: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ACLNames' }})
    arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ARN' }})
    access_string: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AccessString' }})
    authentication: Optional[authentication.Authentication] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Authentication' }})
    minimum_engine_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MinimumEngineVersion' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Name' }})
    status: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Status' }})
    
