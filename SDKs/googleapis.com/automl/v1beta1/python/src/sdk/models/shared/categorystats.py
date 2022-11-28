from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class CategoryStats:
    r"""CategoryStats
    The data statistics of a series of CATEGORY values.
    """
    
    top_category_stats: Optional[List[SingleCategoryStats]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('topCategoryStats') }})
    
