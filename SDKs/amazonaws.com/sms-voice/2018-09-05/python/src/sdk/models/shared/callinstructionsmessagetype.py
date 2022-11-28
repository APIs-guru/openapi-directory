from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class CallInstructionsMessageType:
    r"""CallInstructionsMessageType
    An object that defines a message that contains text formatted using Amazon Pinpoint Voice Instructions markup.
    """
    
    text: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Text') }})
    
