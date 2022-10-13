from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import launchprofilepersona_enum


@dataclass_json
@dataclass
class LaunchProfileMembership:
    identity_store_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'identityStoreId' }})
    persona: Optional[launchprofilepersona_enum.LaunchProfilePersonaEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'persona' }})
    principal_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'principalId' }})
    
