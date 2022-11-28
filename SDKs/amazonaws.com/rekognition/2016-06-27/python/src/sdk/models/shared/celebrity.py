from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class Celebrity:
    r"""Celebrity
    Provides information about a celebrity recognized by the <a>RecognizeCelebrities</a> operation.
    """
    
    face: Optional[ComparedFace] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Face') }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Id') }})
    known_gender: Optional[KnownGender] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('KnownGender') }})
    match_confidence: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MatchConfidence') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Name') }})
    urls: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Urls') }})
    
