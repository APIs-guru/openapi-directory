from dataclasses import dataclass, field
from typing import List
from dataclasses_json import dataclass_json
from . import authmethod


@dataclass_json
@dataclass
class AuthConfig:
    auth_methods: List[authmethod.AuthMethod] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'authMethods' }})
    
