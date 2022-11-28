from dataclasses import dataclass, field
from typing import Any
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class CombinedSubmissionActionActionCategoryEnum(str, Enum):
    NOTIFICATION = "notification"
    FILE_UPLOAD = "file_upload"

class CombinedSubmissionActionActionTypeEnum(str, Enum):
    WEBHOOK = "webhook"
    SLACK_WEBHOOK = "slack_webhook"
    EMAIL = "email"
    AWS_S3_UPLOAD = "aws_s3_upload"

class CombinedSubmissionActionStateEnum(str, Enum):
    PENDING = "pending"
    PROCESSED = "processed"
    FAILED = "failed"
    ERROR = "error"


@dataclass_json
@dataclass
class CombinedSubmissionAction:
    action_category: CombinedSubmissionActionActionCategoryEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('action_category') }})
    action_type: CombinedSubmissionActionActionTypeEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('action_type') }})
    id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    integration_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('integration_id') }})
    result_data: dict[str, Any] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('result_data') }})
    state: CombinedSubmissionActionStateEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('state') }})
    
