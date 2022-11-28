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
class Note:
    r"""Note
    A proposal may be associated to several notes.
    """
    
    create_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('createTime') }})
    creator_role: Optional[NoteCreatorRoleEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('creatorRole') }})
    note: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('note') }})
    note_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('noteId') }})
    proposal_revision: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('proposalRevision') }})
    

@dataclass_json
@dataclass
class NoteInput:
    r"""NoteInput
    A proposal may be associated to several notes.
    """
    
    note: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('note') }})
    
