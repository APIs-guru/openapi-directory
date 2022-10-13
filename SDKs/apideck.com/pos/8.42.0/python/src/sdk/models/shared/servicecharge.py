from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared

class ServiceChargeTypeEnum(str, Enum):
    AUTO_GRATUITY = "auto_gratuity"
    CUSTOM = "custom"


@dataclass_json
@dataclass
class ServiceCharge:
    active: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'active' }})
    amount: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'amount' }})
    currency: Optional[shared.CurrencyEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'currency' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    percentage: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'percentage' }})
    type: Optional[ServiceChargeTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    
