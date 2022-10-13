from dataclasses import dataclass, field
from typing import Any,Enum,List,Optional
from dataclasses_json import dataclass_json
from . import currencycode_enum
from . import savingsplanpaymentoption_enum
from . import savingsplantype_enum
from . import savingsplanproducttype_enum


@dataclass_json
@dataclass
class SavingsPlanOffering:
    currency: Optional[currencycode_enum.CurrencyCodeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'currency' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    duration_seconds: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'durationSeconds' }})
    offering_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'offeringId' }})
    operation: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'operation' }})
    payment_option: Optional[savingsplanpaymentoption_enum.SavingsPlanPaymentOptionEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'paymentOption' }})
    plan_type: Optional[savingsplantype_enum.SavingsPlanTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'planType' }})
    product_types: Optional[List[savingsplanproducttype_enum.SavingsPlanProductTypeEnum]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'productTypes' }})
    properties: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'properties' }})
    service_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'serviceCode' }})
    usage_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'usageType' }})
    
