from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import outputconfig
from . import testingdata
from . import trainingdata


@dataclass_json
@dataclass
class CreateProjectVersionRequest:
    kms_key_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'KmsKeyId' }})
    output_config: outputconfig.OutputConfig = field(default=None, metadata={'dataclasses_json': { 'field_name': 'OutputConfig' }})
    project_arn: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ProjectArn' }})
    tags: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Tags' }})
    testing_data: testingdata.TestingData = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TestingData' }})
    training_data: trainingdata.TrainingData = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TrainingData' }})
    version_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'VersionName' }})
    
