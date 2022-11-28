from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class SubscribeListingRequest:
    r"""SubscribeListingRequest
    Message for subscribing to a listing.
    """
    
    destination_dataset: Optional[DestinationDataset] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('destinationDataset') }})
    
