from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class ModelClientConfig:
    r"""ModelClientConfig
    Configures the timeout and maximum number of retries for processing a transform job invocation.
    """
    
    invocations_max_retries: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('InvocationsMaxRetries') }})
    invocations_timeout_in_seconds: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('InvocationsTimeoutInSeconds') }})
    
