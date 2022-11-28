from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class Body:
    r"""Body
    Represents the body of the email message.
    """
    
    html: Optional[Content] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Html') }})
    text: Optional[Content] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Text') }})
    
