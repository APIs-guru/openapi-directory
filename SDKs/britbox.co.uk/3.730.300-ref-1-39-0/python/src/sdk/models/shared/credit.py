from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

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
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    path: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('path') }})
    role: CreditRoleEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('role') }})
    character: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('character') }})
    
