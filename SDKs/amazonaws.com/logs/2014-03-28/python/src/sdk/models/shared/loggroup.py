from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class LogGroup:
    arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'arn' }})
    creation_time: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'creationTime' }})
    kms_key_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'kmsKeyId' }})
    log_group_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'logGroupName' }})
    metric_filter_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'metricFilterCount' }})
    retention_in_days: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'retentionInDays' }})
    stored_bytes: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'storedBytes' }})
    
