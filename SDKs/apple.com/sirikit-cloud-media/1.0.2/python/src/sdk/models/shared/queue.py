from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class Queue:
    content: List[Content] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('content') }})
    identifier: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('identifier') }})
    version: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('version') }})
    content_items_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('contentItemsCount') }})
    controls: Optional[dict[str, PlayMediaControl]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('controls') }})
    insert_pointer: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('insertPointer') }})
    next_content_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextContentUrl') }})
    play_pointer: Optional[QueuePlayPointer] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('playPointer') }})
    preroll_seconds: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('prerollSeconds') }})
    previous_content_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('previousContentUrl') }})
    skips_remaining: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('skipsRemaining') }})
    
