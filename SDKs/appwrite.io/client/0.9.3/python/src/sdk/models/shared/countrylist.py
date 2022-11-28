from dataclasses import dataclass, field
from typing import List
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class CountryList:
    r"""CountryList
    Countries List
    """
    
    countries: List[Country] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('countries') }})
    sum: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('sum') }})
    
