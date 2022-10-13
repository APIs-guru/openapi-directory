from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import logsettingsresponse


@dataclass_json
@dataclass
class ConversationLogsResponse:
    iam_role_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'iamRoleArn' }})
    log_settings: Optional[List[logsettingsresponse.LogSettingsResponse]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'logSettings' }})
    
