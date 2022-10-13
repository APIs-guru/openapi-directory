from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import studiopersona_enum


@dataclass_json
@dataclass
class StudioMembership:
    identity_store_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'identityStoreId' }})
    persona: Optional[studiopersona_enum.StudioPersonaEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'persona' }})
    principal_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'principalId' }})
    
