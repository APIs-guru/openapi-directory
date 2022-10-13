from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import price


@dataclass_json
@dataclass
class DealTermsGuaranteedFixedPriceTermsBillingInfo:
    currency_conversion_time_ms: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'currencyConversionTimeMs' }})
    dfp_line_item_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dfpLineItemId' }})
    original_contracted_quantity: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'originalContractedQuantity' }})
    price: Optional[price.Price] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'price' }})
    
