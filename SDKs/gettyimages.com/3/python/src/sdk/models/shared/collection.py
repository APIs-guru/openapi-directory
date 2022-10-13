from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class Collection:
    asset_family: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'asset_family' }})
    code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'code' }})
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    license_model: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'license_model' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    product_types: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'product_types' }})
    
