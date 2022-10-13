from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import destinationdatasetreference


@dataclass_json
@dataclass
class DestinationDataset:
    dataset_reference: Optional[destinationdatasetreference.DestinationDatasetReference] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'datasetReference' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    friendly_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'friendlyName' }})
    labels: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'labels' }})
    location: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'location' }})
    
