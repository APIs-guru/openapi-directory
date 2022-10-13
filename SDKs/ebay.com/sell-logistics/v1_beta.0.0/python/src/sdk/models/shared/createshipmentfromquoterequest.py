from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import additionaloption
from . import contact


@dataclass_json
@dataclass
class CreateShipmentFromQuoteRequest:
    additional_options: Optional[List[additionaloption.AdditionalOption]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'additionalOptions' }})
    label_custom_message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'labelCustomMessage' }})
    label_size: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'labelSize' }})
    rate_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'rateId' }})
    return_to: Optional[contact.Contact] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'returnTo' }})
    shipping_quote_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'shippingQuoteId' }})
    
