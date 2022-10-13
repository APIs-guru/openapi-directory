from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import contentattributes


@dataclass_json
@dataclass
class Content:
    attributes: Optional[contentattributes.ContentAttributes] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'attributes' }})
    control: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'control' }})
    identifier: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'identifier' }})
    is_live: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'isLive' }})
    play_index: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'playIndex' }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'url' }})
    
