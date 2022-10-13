from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class ModelClientConfig:
    invocations_max_retries: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'InvocationsMaxRetries' }})
    invocations_timeout_in_seconds: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'InvocationsTimeoutInSeconds' }})
    
