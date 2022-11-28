from dataclasses import dataclass, field
from typing import List
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ArtifactSearchResults:
    r"""ArtifactSearchResults
    Describes the response received when searching for artifacts.
    """
    
    artifacts: List[SearchedArtifact] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('artifacts') }})
    count: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('count') }})
    
