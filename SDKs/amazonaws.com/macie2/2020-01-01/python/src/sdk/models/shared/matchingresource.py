from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class MatchingResource:
    r"""MatchingResource
    Provides statistical data and other information about an Amazon Web Services resource that Amazon Macie monitors and analyzes.
    """
    
    matching_bucket: Optional[MatchingBucket] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('matchingBucket') }})
    
