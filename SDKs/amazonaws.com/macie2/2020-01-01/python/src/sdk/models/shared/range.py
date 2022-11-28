from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class Range:
    r"""Range
    Specifies the location of an occurrence of sensitive data in a non-binary text file, such as an HTML, TXT, or XML file.
    """
    
    end: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('end') }})
    start: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('start') }})
    start_column: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('startColumn') }})
    
