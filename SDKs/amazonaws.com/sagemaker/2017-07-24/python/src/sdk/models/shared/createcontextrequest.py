from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import contextsource
from . import tag


@dataclass_json
@dataclass
class CreateContextRequest:
    context_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ContextName' }})
    context_type: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ContextType' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Description' }})
    properties: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Properties' }})
    source: contextsource.ContextSource = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Source' }})
    tags: Optional[List[tag.Tag]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Tags' }})
    
