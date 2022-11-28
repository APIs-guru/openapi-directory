from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class CloudWatchLoggingOptionUpdate:
    r"""CloudWatchLoggingOptionUpdate
    Describes CloudWatch logging option updates.
    """
    
    cloud_watch_logging_option_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('CloudWatchLoggingOptionId') }})
    log_stream_arn_update: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LogStreamARNUpdate') }})
    role_arn_update: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RoleARNUpdate') }})
    
