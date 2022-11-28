from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class CreatePresignedDomainURLRequest:
    domain_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('DomainId') }})
    user_profile_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('UserProfileName') }})
    expires_in_seconds: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ExpiresInSeconds') }})
    session_expiration_duration_in_seconds: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SessionExpirationDurationInSeconds') }})
    
