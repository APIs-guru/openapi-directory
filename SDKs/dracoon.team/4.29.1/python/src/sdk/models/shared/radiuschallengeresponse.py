from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class RadiusChallengeResponse:
    r"""RadiusChallengeResponse
    RADIUS challenge reply
    """
    
    code: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    message: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    reply_message: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('replyMessage') }})
    reply_state: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('replyState') }})
    debug_info: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('debugInfo') }})
    error_code: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('errorCode') }})
    
