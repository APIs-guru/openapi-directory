from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class SubscribeWithGoogleInfo:
    r"""SubscribeWithGoogleInfo
    Information associated with purchases made with 'Subscribe with Google'.
    """
    
    email_address: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('emailAddress') }})
    family_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('familyName') }})
    given_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('givenName') }})
    profile_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('profileId') }})
    profile_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('profileName') }})
    
