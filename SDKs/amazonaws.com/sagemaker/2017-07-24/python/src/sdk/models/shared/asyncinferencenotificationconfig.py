from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class AsyncInferenceNotificationConfig:
    r"""AsyncInferenceNotificationConfig
    Specifies the configuration for notifications of inference results for asynchronous inference.
    """
    
    error_topic: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ErrorTopic') }})
    success_topic: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SuccessTopic') }})
    
