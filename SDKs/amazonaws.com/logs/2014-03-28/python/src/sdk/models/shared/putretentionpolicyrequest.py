from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class PutRetentionPolicyRequest:
    log_group_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('logGroupName') }})
    retention_in_days: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('retentionInDays') }})
    
