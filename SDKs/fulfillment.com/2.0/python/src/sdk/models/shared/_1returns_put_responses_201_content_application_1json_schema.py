from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import _1returns_get_responses_200_content_application_1json_schema_properties_data_items_properties_updatedby


@dataclass_json
@dataclass
class OnereturnsPutResponses201ContentApplication1jsonSchemaItems:
    quantity_expected: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'quantityExpected' }})
    sku: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sku' }})
    

@dataclass_json
@dataclass
class OnereturnsPutResponses201ContentApplication1jsonSchemaRecipientIsoIsoCountryV2:
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    iso2: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'iso2' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    

@dataclass_json
@dataclass
class OnereturnsPutResponses201ContentApplication1jsonSchemaRecipientConsigneeV2:
    address1: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'address1' }})
    address2: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'address2' }})
    address_locality: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'addressLocality' }})
    address_region: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'addressRegion' }})
    company_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'companyName' }})
    country: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'country' }})
    email: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'email' }})
    first_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'firstName' }})
    id: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    iso: Optional[OnereturnsPutResponses201ContentApplication1jsonSchemaRecipientIsoIsoCountryV2] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'iso' }})
    last_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lastName' }})
    phone: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'phone' }})
    postal_code: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'postalCode' }})
    updated_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'updatedAt', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    updated_by: Optional[_1returns_get_responses_200_content_application_1json_schema_properties_data_items_properties_updatedby.OnereturnsGetResponses200ContentApplication1jsonSchemaPropertiesDataItemsPropertiesUpdatedBy] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'updatedBy' }})
    

@dataclass_json
@dataclass
class OnereturnsPutResponses201ContentApplication1jsonSchema:
    items: List[OnereturnsPutResponses201ContentApplication1jsonSchemaItems] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'items' }})
    merchant_order_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'merchantOrderId' }})
    recipient: OnereturnsPutResponses201ContentApplication1jsonSchemaRecipientConsigneeV2 = field(default=None, metadata={'dataclasses_json': { 'field_name': 'recipient' }})
    rma_number: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'rmaNumber' }})
    
