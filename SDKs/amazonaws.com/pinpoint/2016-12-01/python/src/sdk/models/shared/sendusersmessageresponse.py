from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class SendUsersMessageResponse:
    r"""SendUsersMessageResponse
    Provides information about which users and endpoints a message was sent to.
    """
    
    application_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ApplicationId') }})
    request_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RequestId') }})
    result: Optional[dict[str, dict[str, EndpointMessageResult]]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Result') }})
    
