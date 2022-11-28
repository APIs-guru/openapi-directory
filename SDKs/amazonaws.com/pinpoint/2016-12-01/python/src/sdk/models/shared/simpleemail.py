from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class SimpleEmail:
    r"""SimpleEmail
    Specifies the contents of an email message, composed of a subject, a text part, and an HTML part.
    """
    
    html_part: Optional[SimpleEmailPart] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('HtmlPart') }})
    subject: Optional[SimpleEmailPart] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Subject') }})
    text_part: Optional[SimpleEmailPart] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TextPart') }})
    
