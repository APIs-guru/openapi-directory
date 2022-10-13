from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class AwsElbAppCookieStickinessPolicy:
    cookie_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CookieName' }})
    policy_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PolicyName' }})
    
