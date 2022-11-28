from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class UnindexedFace:
    r"""UnindexedFace
    A face that <a>IndexFaces</a> detected, but didn't index. Use the <code>Reasons</code> response attribute to determine why a face wasn't indexed.
    """
    
    face_detail: Optional[FaceDetail] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FaceDetail') }})
    reasons: Optional[List[ReasonEnum]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Reasons') }})
    
