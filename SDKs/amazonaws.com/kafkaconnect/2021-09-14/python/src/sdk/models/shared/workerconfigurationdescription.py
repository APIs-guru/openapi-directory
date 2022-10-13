from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class WorkerConfigurationDescription:
    revision: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'revision' }})
    worker_configuration_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'workerConfigurationArn' }})
    
