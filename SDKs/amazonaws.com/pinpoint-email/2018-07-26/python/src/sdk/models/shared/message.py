from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class Message:
    r"""Message
    Represents the email message that you're sending. The <code>Message</code> object consists of a subject line and a message body.
    """
    
    body: Body = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Body') }})
    subject: Content = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Subject') }})
    
