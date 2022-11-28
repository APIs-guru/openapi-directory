from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class AspectDistribution:
    r"""AspectDistribution
    This type contains information about one category aspect that is associated with a specified category.
    """
    
    aspect_value_distributions: Optional[List[AspectValueDistribution]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('aspectValueDistributions') }})
    localized_aspect_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('localizedAspectName') }})
    
