from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class TranslateRequest:
    from_: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'from' }})
    text: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'text' }})
    to: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'to' }})
    translation_context: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'translationContext' }})
    
