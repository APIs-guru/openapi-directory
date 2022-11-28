from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class NoteCreatorRoleEnum(str, Enum):
    BUYER_SELLER_ROLE_UNSPECIFIED = "BUYER_SELLER_ROLE_UNSPECIFIED"
    BUYER = "BUYER"
    SELLER = "SELLER"


@dataclass_json
@dataclass
class NoteInput:
    r"""NoteInput
    A text note attached to the proposal to facilitate the communication between buyers and sellers.
    """
    
    note: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('note') }})
    

@dataclass_json
@dataclass
class Note:
    r"""Note
    A text note attached to the proposal to facilitate the communication between buyers and sellers.
    """
    
    create_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('createTime') }})
    creator_role: Optional[NoteCreatorRoleEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('creatorRole') }})
    note: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('note') }})
    
