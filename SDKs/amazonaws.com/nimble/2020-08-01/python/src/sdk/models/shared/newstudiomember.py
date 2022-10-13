from dataclasses import dataclass, field
from typing import Enum
from dataclasses_json import dataclass_json
from . import studiopersona_enum


@dataclass_json
@dataclass
class NewStudioMember:
    persona: studiopersona_enum.StudioPersonaEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'persona' }})
    principal_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'principalId' }})
    
