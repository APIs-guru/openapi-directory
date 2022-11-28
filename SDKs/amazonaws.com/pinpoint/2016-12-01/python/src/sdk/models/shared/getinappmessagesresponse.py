from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GetInAppMessagesResponse:
    in_app_messages_response: InAppMessagesResponse = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('InAppMessagesResponse') }})
    
