from dataclasses import dataclass, field
from typing import Any,Enum,Optional
from dataclasses_json import dataclass_json
from . import currencycode_enum
from . import savingsplanproducttype_enum
from . import savingsplanrateservicecode_enum
from . import savingsplanrateunit_enum


@dataclass_json
@dataclass
class SavingsPlanRate:
    currency: Optional[currencycode_enum.CurrencyCodeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'currency' }})
    operation: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'operation' }})
    product_type: Optional[savingsplanproducttype_enum.SavingsPlanProductTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'productType' }})
    properties: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'properties' }})
    rate: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'rate' }})
    service_code: Optional[savingsplanrateservicecode_enum.SavingsPlanRateServiceCodeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'serviceCode' }})
    unit: Optional[savingsplanrateunit_enum.SavingsPlanRateUnitEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'unit' }})
    usage_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'usageType' }})
    
