from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import webacl


@dataclass_json
@dataclass
class CreateWebACLResponse:
    change_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ChangeToken' }})
    web_acl: Optional[webacl.WebACL] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'WebACL' }})
    
