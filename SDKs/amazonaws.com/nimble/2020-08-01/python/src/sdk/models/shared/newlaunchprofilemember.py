from dataclasses import dataclass, field
from typing import Enum
from dataclasses_json import dataclass_json
from . import launchprofilepersona_enum


@dataclass_json
@dataclass
class NewLaunchProfileMember:
    persona: launchprofilepersona_enum.LaunchProfilePersonaEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'persona' }})
    principal_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'principalId' }})
    
