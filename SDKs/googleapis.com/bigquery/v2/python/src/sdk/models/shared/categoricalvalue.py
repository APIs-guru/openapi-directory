from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class CategoricalValue:
    r"""CategoricalValue
    Representative value of a categorical feature.
    """
    
    category_counts: Optional[List[CategoryCount]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('categoryCounts') }})
    
