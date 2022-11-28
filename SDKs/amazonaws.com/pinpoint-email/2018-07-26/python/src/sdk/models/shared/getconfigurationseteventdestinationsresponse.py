from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GetConfigurationSetEventDestinationsResponse:
    r"""GetConfigurationSetEventDestinationsResponse
    Information about an event destination for a configuration set.
    """
    
    event_destinations: Optional[List[EventDestination]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EventDestinations') }})
    
