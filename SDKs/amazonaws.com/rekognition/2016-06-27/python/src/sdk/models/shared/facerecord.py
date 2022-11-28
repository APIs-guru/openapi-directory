from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class FaceRecord:
    r"""FaceRecord
    Object containing both the face metadata (stored in the backend database), and facial attributes that are detected but aren't stored in the database.
    """
    
    face: Optional[Face] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Face') }})
    face_detail: Optional[FaceDetail] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FaceDetail') }})
    
