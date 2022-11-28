from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class AddNoteRequestInput:
    r"""AddNoteRequestInput
    Request to add a note.
    """
    
    note: Optional[NoteInput] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('note') }})
    
