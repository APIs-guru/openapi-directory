from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class AsyncInferenceOutputConfig:
    r"""AsyncInferenceOutputConfig
    Specifies the configuration for asynchronous inference invocation outputs.
    """
    
    s3_output_path: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('S3OutputPath') }})
    kms_key_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('KmsKeyId') }})
    notification_config: Optional[AsyncInferenceNotificationConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NotificationConfig') }})
    
