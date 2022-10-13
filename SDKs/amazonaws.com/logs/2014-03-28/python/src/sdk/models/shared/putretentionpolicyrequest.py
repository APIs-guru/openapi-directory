from dataclasses import dataclass, field
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class PutRetentionPolicyRequest:
    log_group_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'logGroupName' }})
    retention_in_days: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'retentionInDays' }})
    
