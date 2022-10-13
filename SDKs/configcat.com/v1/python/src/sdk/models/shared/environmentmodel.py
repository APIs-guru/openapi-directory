from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import productmodel


@dataclass_json
@dataclass
class EnvironmentModel:
    environment_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'environmentId' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    product: Optional[productmodel.ProductModel] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'product' }})
    
