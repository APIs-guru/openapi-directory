from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class SimpleEmailPart:
    r"""SimpleEmailPart
    Specifies the subject or body of an email message, represented as textual email data and the applicable character set.
    """
    
    charset: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Charset') }})
    data: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Data') }})
    
