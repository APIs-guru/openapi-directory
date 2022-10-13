from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import asyncinferencenotificationconfig


@dataclass_json
@dataclass
class AsyncInferenceOutputConfig:
    kms_key_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'KmsKeyId' }})
    notification_config: Optional[asyncinferencenotificationconfig.AsyncInferenceNotificationConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NotificationConfig' }})
    s3_output_path: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'S3OutputPath' }})
    
