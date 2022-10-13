from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import destinationdataset


@dataclass_json
@dataclass
class SubscribeListingRequest:
    destination_dataset: Optional[destinationdataset.DestinationDataset] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'destinationDataset' }})
    
