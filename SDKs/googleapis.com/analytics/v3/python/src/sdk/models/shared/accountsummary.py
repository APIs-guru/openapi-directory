from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import webpropertysummary


@dataclass_json
@dataclass
class AccountSummary:
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'kind' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    starred: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'starred' }})
    web_properties: Optional[List[webpropertysummary.WebPropertySummary]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'webProperties' }})
    
