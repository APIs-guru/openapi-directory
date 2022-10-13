from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import content
from . import content


@dataclass_json
@dataclass
class Body:
    html: Optional[content.Content] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Html' }})
    text: Optional[content.Content] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Text' }})
    
