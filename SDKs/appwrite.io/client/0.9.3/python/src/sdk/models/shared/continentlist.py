from dataclasses import dataclass, field
from typing import List
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ContinentList:
    r"""ContinentList
    Continents List
    """
    
    continents: List[Continent] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('continents') }})
    sum: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('sum') }})
    
