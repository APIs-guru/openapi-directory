from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class OnepaymentrequestsPostRequestBodyContentApplication1jsonSchemaPropertiesOrderDetails:
    comment1: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'comment1' }})
    comment2: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'comment2' }})
    customer_number: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'customerNumber' }})
    delivery_address_line1: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'deliveryAddressLine1' }})
    delivery_address_line2: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'deliveryAddressLine2' }})
    delivery_city: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'deliveryCity' }})
    delivery_country: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'deliveryCountry' }})
    delivery_post_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'deliveryPostCode' }})
    merchant_customer_identification: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'merchantCustomerIdentification' }})
    merchant_number: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'merchantNumber' }})
    order_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'orderId' }})
    product_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'productId' }})
    variable_reference: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'variableReference' }})
    
