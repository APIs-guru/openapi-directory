from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class CreateProjectVersionRequest:
    output_config: OutputConfig = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('OutputConfig') }})
    project_arn: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ProjectArn') }})
    testing_data: TestingData = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('TestingData') }})
    training_data: TrainingData = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('TrainingData') }})
    version_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('VersionName') }})
    kms_key_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('KmsKeyId') }})
    tags: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Tags') }})
    
