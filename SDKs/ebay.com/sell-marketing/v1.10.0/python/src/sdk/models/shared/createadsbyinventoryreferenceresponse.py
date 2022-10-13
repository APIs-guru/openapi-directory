from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import adreference
from . import error


@dataclass_json
@dataclass
class CreateAdsByInventoryReferenceResponse:
    ads: Optional[List[adreference.AdReference]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ads' }})
    errors: Optional[List[error.Error]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'errors' }})
    inventory_reference_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'inventoryReferenceId' }})
    inventory_reference_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'inventoryReferenceType' }})
    status_code: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'statusCode' }})
    
