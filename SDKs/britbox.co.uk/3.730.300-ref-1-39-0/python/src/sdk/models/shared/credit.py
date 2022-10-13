from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class CreditRoleEnum(str, Enum):
    ACTOR = "actor"
    ASSOCIATEPRODUCER = "associateproducer"
    COACTOR = "coactor"
    DIRECTOR = "director"
    EXECUTIVEPRODUCER = "executiveproducer"
    FILMINGLOCATION = "filminglocation"
    GUEST = "guest"
    NARRATOR = "narrator"
    OTHER = "other"
    PRESENTER = "presenter"
    PRODUCER = "producer"
    PRODUCTMANAGER = "productmanager"
    THEMEMUSICBY = "thememusicby"
    VOICE = "voice"
    WRITER = "writer"


@dataclass_json
@dataclass
class Credit:
    character: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'character' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    path: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'path' }})
    role: CreditRoleEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'role' }})
    
