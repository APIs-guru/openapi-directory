from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import metadataproperties
from . import tag


@dataclass_json
@dataclass
class CreateTrialRequest:
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DisplayName' }})
    experiment_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ExperimentName' }})
    metadata_properties: Optional[metadataproperties.MetadataProperties] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MetadataProperties' }})
    tags: Optional[List[tag.Tag]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Tags' }})
    trial_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TrialName' }})
    
