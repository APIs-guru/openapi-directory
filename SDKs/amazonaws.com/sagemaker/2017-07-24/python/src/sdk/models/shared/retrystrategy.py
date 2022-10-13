from dataclasses import dataclass, field
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class RetryStrategy:
    maximum_retry_attempts: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MaximumRetryAttempts' }})
    
