from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class SearchForTextResult:
    r"""SearchForTextResult
    Contains relevant Places returned by calling <code>SearchPlaceIndexForText</code>.
    """
    
    place: Place = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Place') }})
    
