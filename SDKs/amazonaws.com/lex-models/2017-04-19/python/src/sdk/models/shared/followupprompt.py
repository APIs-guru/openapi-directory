from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class FollowUpPrompt:
    r"""FollowUpPrompt
    A prompt for additional activity after an intent is fulfilled. For example, after the <code>OrderPizza</code> intent is fulfilled, you might prompt the user to find out whether the user wants to order drinks.
    """
    
    prompt: Prompt = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('prompt') }})
    rejection_statement: Statement = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('rejectionStatement') }})
    
