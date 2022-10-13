from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class AsyncInferenceNotificationConfig:
    error_topic: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ErrorTopic' }})
    success_topic: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SuccessTopic' }})
    
