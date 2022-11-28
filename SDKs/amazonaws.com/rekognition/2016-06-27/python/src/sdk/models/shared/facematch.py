from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class FaceMatch:
    r"""FaceMatch
    Provides face metadata. In addition, it also provides the confidence in the match of this face with the input face.
    """
    
    face: Optional[Face] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Face') }})
    similarity: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Similarity') }})
    
