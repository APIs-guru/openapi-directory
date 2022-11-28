from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class MessageResponse:
    r"""MessageResponse
    Provides information about the results of a request to send a message to an endpoint address.
    """
    
    application_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ApplicationId') }})
    endpoint_result: Optional[dict[str, EndpointMessageResult]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EndpointResult') }})
    request_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RequestId') }})
    result: Optional[dict[str, MessageResult]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Result') }})
    
