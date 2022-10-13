from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from . import content
from . import playmediacontrol
from . import queueplaypointer


@dataclass_json
@dataclass
class Queue:
    content: List[content.Content] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'content' }})
    content_items_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'contentItemsCount' }})
    controls: Optional[dict[str, playmediacontrol.PlayMediaControl]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'controls' }})
    identifier: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'identifier' }})
    insert_pointer: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'insertPointer' }})
    next_content_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextContentUrl' }})
    play_pointer: Optional[queueplaypointer.QueuePlayPointer] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'playPointer' }})
    preroll_seconds: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'prerollSeconds' }})
    previous_content_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'previousContentUrl' }})
    skips_remaining: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'skipsRemaining' }})
    version: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'version' }})
    
