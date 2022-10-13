from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class User:
    avatar_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'avatar_url' }})
    banner_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'banner_url' }})
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'display_name' }})
    profile_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'profile_url' }})
    twitter: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'twitter' }})
    username: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'username' }})
    
