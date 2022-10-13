from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class ResendContactReachabilityEmailResponse:
    domain_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'domainName' }})
    email_address: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'emailAddress' }})
    is_already_verified: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'isAlreadyVerified' }})
    
