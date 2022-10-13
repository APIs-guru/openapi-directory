from dataclasses import dataclass, field
from typing import Any,Enum,Optional
from dataclasses_json import dataclass_json
from . import savingsplanproducttype_enum
from . import parentsavingsplanoffering
from . import savingsplanrateservicecode_enum
from . import savingsplanrateunit_enum


@dataclass_json
@dataclass
class SavingsPlanOfferingRate:
    operation: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'operation' }})
    product_type: Optional[savingsplanproducttype_enum.SavingsPlanProductTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'productType' }})
    properties: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'properties' }})
    rate: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'rate' }})
    savings_plan_offering: Optional[parentsavingsplanoffering.ParentSavingsPlanOffering] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'savingsPlanOffering' }})
    service_code: Optional[savingsplanrateservicecode_enum.SavingsPlanRateServiceCodeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'serviceCode' }})
    unit: Optional[savingsplanrateunit_enum.SavingsPlanRateUnitEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'unit' }})
    usage_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'usageType' }})
    
