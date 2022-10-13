from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class AdClient:
    arc_opt_in: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'arcOptIn' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'kind' }})
    product_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'productCode' }})
    supports_reporting: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'supportsReporting' }})
    
