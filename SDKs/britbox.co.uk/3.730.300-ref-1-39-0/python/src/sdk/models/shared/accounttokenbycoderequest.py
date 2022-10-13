from dataclasses import dataclass, field
from typing import Enum,List
from dataclasses_json import dataclass_json

class AccountTokenByCodeRequestScopesEnum(str, Enum):
    CATALOG = "Catalog"
    COMMERCE = "Commerce"
    SETTINGS = "Settings"
    PLAYBACK = "Playback"


@dataclass_json
@dataclass
class AccountTokenByCodeRequest:
    code: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'code' }})
    id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    scopes: List[AccountTokenByCodeRequestScopesEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'scopes' }})
    
