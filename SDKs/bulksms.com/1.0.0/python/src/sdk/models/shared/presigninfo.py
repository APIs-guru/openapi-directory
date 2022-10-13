from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class PreSignInfoFields:
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'value' }})
    

@dataclass_json
@dataclass
class PreSignInfo:
    fetch_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fetchUrl' }})
    fields: Optional[List[PreSignInfoFields]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fields' }})
    put_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'putUrl' }})
    
