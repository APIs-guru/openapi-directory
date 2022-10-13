from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class Service:
    attribute_names: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AttributeNames' }})
    service_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ServiceCode' }})
    
