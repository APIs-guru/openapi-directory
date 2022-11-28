from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class PopularCars:
    r"""PopularCars
    Top 50 popular cars
    """
    
    new_top50: Optional[List[BasePopular]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('new_top50') }})
    used_top50: Optional[List[BasePopular]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('used_top50') }})
    
