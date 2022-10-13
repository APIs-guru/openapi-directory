from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class SubscribeWithGoogleInfo:
    email_address: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'emailAddress' }})
    family_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'familyName' }})
    given_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'givenName' }})
    profile_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'profileId' }})
    profile_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'profileName' }})
    
