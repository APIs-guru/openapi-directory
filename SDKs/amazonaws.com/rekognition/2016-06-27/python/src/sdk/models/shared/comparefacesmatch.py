from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class CompareFacesMatch:
    r"""CompareFacesMatch
    Provides information about a face in a target image that matches the source image face analyzed by <code>CompareFaces</code>. The <code>Face</code> property contains the bounding box of the face in the target image. The <code>Similarity</code> property is the confidence that the source image face matches the face in the bounding box.
    """
    
    face: Optional[ComparedFace] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Face') }})
    similarity: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Similarity') }})
    
