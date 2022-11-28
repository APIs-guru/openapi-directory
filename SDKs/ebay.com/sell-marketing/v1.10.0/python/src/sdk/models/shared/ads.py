from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class Ads:
    r"""Ads
    This type defines the container for an array of ads.
    """
    
    ads: Optional[List[Ad]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ads') }})
    
