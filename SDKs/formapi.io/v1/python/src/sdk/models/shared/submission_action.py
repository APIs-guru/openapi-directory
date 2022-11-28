from dataclasses import dataclass, field
from typing import Any
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

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
    action_category: SubmissionActionActionCategoryEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('action_category') }})
    action_type: SubmissionActionActionTypeEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('action_type') }})
    id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    integration_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('integration_id') }})
    result_data: dict[str, Any] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('result_data') }})
    state: SubmissionActionStateEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('state') }})
    
