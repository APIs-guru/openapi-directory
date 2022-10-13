from dataclasses import dataclass, field
from typing import Any,Enum
from dataclasses_json import dataclass_json

class SubmissionActionActionCategoryEnum(str, Enum):
    NOTIFICATION = "notification"
    FILE_UPLOAD = "file_upload"

class SubmissionActionActionTypeEnum(str, Enum):
    WEBHOOK = "webhook"
    SLACK_WEBHOOK = "slack_webhook"
    EMAIL = "email"
    AWS_S3_UPLOAD = "aws_s3_upload"

class SubmissionActionStateEnum(str, Enum):
    PENDING = "pending"
    PROCESSED = "processed"
    FAILED = "failed"
    ERROR = "error"


@dataclass_json
@dataclass
class SubmissionAction:
    action_category: SubmissionActionActionCategoryEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'action_category' }})
    action_type: SubmissionActionActionTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'action_type' }})
    id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    integration_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'integration_id' }})
    result_data: dict[str, Any] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'result_data' }})
    state: SubmissionActionStateEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'state' }})
    
