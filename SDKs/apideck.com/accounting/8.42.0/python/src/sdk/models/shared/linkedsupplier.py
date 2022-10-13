from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass_json
@dataclass
class LinkedSupplier:
    address: Optional[shared.Address] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'address' }})
    company_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'company_name' }})
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'display_name' }})
    id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    
