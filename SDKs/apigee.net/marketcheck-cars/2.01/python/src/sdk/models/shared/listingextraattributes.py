from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class ListingExtraAttributes:
    dealer_added_f: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dealer_added_f' }})
    electronics_f: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'electronics_f' }})
    exterior_f: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'exterior_f' }})
    features: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'features' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    interior_f: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'interior_f' }})
    options: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'options' }})
    safety_f: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'safety_f' }})
    seller_cmts: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'seller_cmts' }})
    standard_f: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'standard_f' }})
    technical_f: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'technical_f' }})
    
