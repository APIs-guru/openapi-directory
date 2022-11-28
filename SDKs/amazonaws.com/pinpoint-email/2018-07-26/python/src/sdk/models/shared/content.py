from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class Content:
    r"""Content
    An object that represents the content of the email, and optionally a character set specification.
    """
    
    data: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Data') }})
    charset: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Charset') }})
    
