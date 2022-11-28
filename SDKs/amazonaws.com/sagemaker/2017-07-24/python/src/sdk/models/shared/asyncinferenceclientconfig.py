from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class AsyncInferenceClientConfig:
    r"""AsyncInferenceClientConfig
    Configures the behavior of the client used by Amazon SageMaker to interact with the model container during asynchronous inference.
    """
    
    max_concurrent_invocations_per_instance: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MaxConcurrentInvocationsPerInstance') }})
    
