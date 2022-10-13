from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import serviceaccountkey


@dataclass_json
@dataclass
class ServiceAccount:
    key: Optional[serviceaccountkey.ServiceAccountKey] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'key' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    
