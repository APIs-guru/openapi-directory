from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class AdReferences:
    r"""AdReferences
    This type is a container for a list of ad IDs and their associated URIs.
    """
    
    ads: Optional[List[AdReference]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ads') }})
    
