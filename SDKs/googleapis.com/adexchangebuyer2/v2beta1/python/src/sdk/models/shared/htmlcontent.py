from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class HTMLContent:
    r"""HTMLContent
    HTML content for a creative.
    """
    
    height: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('height') }})
    snippet: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('snippet') }})
    width: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('width') }})
    
