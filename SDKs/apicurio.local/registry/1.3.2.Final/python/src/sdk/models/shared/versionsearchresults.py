from dataclasses import dataclass, field
from typing import List
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class VersionSearchResults:
    r"""VersionSearchResults
    Describes the response received when searching for artifacts.
    """
    
    count: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('count') }})
    versions: List[SearchedVersion] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('versions') }})
    
