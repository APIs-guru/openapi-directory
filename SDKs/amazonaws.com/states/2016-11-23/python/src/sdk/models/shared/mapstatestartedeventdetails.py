from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class MapStateStartedEventDetails:
    r"""MapStateStartedEventDetails
    Details about a Map state that was started.
    """
    
    length: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('length') }})
    
