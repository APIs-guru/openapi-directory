from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class ProfileCreationRequest:
    language_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'languageCode' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    pin_enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pinEnabled' }})
    purchase_enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'purchaseEnabled' }})
    segments: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'segments' }})
    
