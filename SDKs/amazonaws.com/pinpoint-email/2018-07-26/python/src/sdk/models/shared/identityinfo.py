from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import identitytype_enum


@dataclass_json
@dataclass
class IdentityInfo:
    identity_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'IdentityName' }})
    identity_type: Optional[identitytype_enum.IdentityTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'IdentityType' }})
    sending_enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SendingEnabled' }})
    
