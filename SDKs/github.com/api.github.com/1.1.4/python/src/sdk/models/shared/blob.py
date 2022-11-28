from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class Blob:
    r"""Blob
    Blob
    """
    
    content: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('content') }})
    encoding: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('encoding') }})
    node_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('node_id') }})
    sha: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('sha') }})
    size: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('size') }})
    url: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    highlighted_content: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('highlighted_content') }})
    
