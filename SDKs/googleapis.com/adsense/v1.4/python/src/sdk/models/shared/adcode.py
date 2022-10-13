from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class AdCode:
    ad_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'adCode' }})
    amp_body: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ampBody' }})
    amp_head: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ampHead' }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'kind' }})
    
