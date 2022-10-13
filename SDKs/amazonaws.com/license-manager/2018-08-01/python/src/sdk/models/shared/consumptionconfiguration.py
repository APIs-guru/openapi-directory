from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import borrowconfiguration
from . import provisionalconfiguration
from . import renewtype_enum


@dataclass_json
@dataclass
class ConsumptionConfiguration:
    borrow_configuration: Optional[borrowconfiguration.BorrowConfiguration] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'BorrowConfiguration' }})
    provisional_configuration: Optional[provisionalconfiguration.ProvisionalConfiguration] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ProvisionalConfiguration' }})
    renew_type: Optional[renewtype_enum.RenewTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RenewType' }})
    
