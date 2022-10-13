from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class EndpointSendConfiguration:
    body_override: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'BodyOverride' }})
    context: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Context' }})
    raw_content: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RawContent' }})
    substitutions: Optional[dict[str, List[str]]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Substitutions' }})
    title_override: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TitleOverride' }})
    
