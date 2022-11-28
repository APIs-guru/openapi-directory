from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class CreateTrialRequest:
    experiment_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ExperimentName') }})
    trial_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('TrialName') }})
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DisplayName') }})
    metadata_properties: Optional[MetadataProperties] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MetadataProperties') }})
    tags: Optional[List[Tag]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Tags') }})
    
