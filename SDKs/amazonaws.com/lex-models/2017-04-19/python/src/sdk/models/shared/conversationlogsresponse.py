from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ConversationLogsResponse:
    r"""ConversationLogsResponse
    Contains information about conversation log settings.
    """
    
    iam_role_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('iamRoleArn') }})
    log_settings: Optional[List[LogSettingsResponse]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('logSettings') }})
    
