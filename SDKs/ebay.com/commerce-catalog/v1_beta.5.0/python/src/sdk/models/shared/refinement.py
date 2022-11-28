from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class Refinement:
    r"""Refinement
    This type identifies a product category and the aspects associated with that category. Each aspect distribution container returns the distribution of values that have been used for the aspect.
    """
    
    aspect_distributions: Optional[List[AspectDistribution]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('aspectDistributions') }})
    dominant_category_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dominantCategoryId') }})
    
