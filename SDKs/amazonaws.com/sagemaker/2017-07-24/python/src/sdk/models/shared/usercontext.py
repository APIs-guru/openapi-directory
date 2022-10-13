from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class UserContext:
    domain_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DomainId' }})
    user_profile_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'UserProfileArn' }})
    user_profile_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'UserProfileName' }})
    
