from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class UserFacingMessage:
    r"""UserFacingMessage
    Provides a user-facing message with locale info. The maximum message length is 4096 characters.
    """
    
    default_message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('defaultMessage') }})
    localized_messages: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('localizedMessages') }})
    
