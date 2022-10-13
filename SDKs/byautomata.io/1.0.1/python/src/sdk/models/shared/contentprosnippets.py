from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class ContentProSnippets:
    description: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    text: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'text' }})
    title: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'title' }})
    
