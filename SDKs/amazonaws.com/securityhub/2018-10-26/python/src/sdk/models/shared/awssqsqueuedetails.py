from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class AwsSqsQueueDetails:
    dead_letter_target_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DeadLetterTargetArn' }})
    kms_data_key_reuse_period_seconds: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'KmsDataKeyReusePeriodSeconds' }})
    kms_master_key_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'KmsMasterKeyId' }})
    queue_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'QueueName' }})
    
