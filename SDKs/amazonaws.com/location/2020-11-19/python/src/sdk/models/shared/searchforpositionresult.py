from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class SearchForPositionResult:
    r"""SearchForPositionResult
    Specifies a single point of interest, or Place as a result of a search query obtained from a dataset configured in the place index resource.
    """
    
    place: Place = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Place') }})
    
