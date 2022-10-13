from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import interaction_expiry_enum
from . import interaction_group_enum


@dataclass_json
@dataclass
class InteractionLimit:
    expiry: Optional[interaction_expiry_enum.InteractionExpiryEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'expiry' }})
    limit: interaction_group_enum.InteractionGroupEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'limit' }})
    
