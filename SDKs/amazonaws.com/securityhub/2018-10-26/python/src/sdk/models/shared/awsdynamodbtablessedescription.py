from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class AwsDynamoDbTableSseDescription:
    inaccessible_encryption_date_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'InaccessibleEncryptionDateTime' }})
    kms_master_key_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'KmsMasterKeyArn' }})
    sse_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SseType' }})
    status: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Status' }})
    
