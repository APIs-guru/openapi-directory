from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class StartTextDetectionFilters:
    r"""StartTextDetectionFilters
    Set of optional parameters that let you set the criteria text must meet to be included in your response. <code>WordFilter</code> looks at a word's height, width and minimum confidence. <code>RegionOfInterest</code> lets you set a specific region of the screen to look for text in.
    """
    
    regions_of_interest: Optional[List[RegionOfInterest]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RegionsOfInterest') }})
    word_filter: Optional[DetectionFilter] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('WordFilter') }})
    
