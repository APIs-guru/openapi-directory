from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class CreatePresignedDomainURLRequest:
    domain_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DomainId' }})
    expires_in_seconds: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ExpiresInSeconds' }})
    session_expiration_duration_in_seconds: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SessionExpirationDurationInSeconds' }})
    user_profile_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'UserProfileName' }})
    
