from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class ActionSource:
    source_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SourceId' }})
    source_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SourceType' }})
    source_uri: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SourceUri' }})
    
