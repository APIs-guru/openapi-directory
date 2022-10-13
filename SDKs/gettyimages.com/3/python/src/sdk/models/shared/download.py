from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class Download:
    agreement_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'agreement_name' }})
    product_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'product_id' }})
    product_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'product_type' }})
    uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'uri' }})
    
