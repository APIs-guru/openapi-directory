from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class ChatChannel:
    r"""ChatChannel
    The AWS Chatbot chat channel used for collaboration during an incident.
    """
    
    chatbot_sns: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('chatbotSns') }})
    empty: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('empty') }})
    
