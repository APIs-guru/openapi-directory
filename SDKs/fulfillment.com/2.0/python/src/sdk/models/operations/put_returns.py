from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass_json
@dataclass
class PutReturnsRmaRequestV2Items:
    quantity_expected: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'quantityExpected' }})
    sku: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sku' }})
    

@dataclass_json
@dataclass
class PutReturnsRmaRequestV2:
    items: List[PutReturnsRmaRequestV2Items] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'items' }})
    merchant_order_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'merchantOrderId' }})
    recipient: shared.OneordersPostRequestBodyContentApplication1jsonSchemaPropertiesRecipient = field(default=None, metadata={'dataclasses_json': { 'field_name': 'recipient' }})
    rma_number: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'rmaNumber' }})
    

@dataclass
class PutReturnsSecurity:
    fdc_auth: shared.SchemeFdcAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class PutReturnsRequest:
    request: PutReturnsRmaRequestV2 = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    security: PutReturnsSecurity = field(default=None)
    

@dataclass_json
@dataclass
class PutReturnsRmaResponseV2Items:
    quantity_expected: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'quantityExpected' }})
    sku: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sku' }})
    

@dataclass_json
@dataclass
class PutReturnsRmaResponseV2ConsigneeV2IsoCountryV2:
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    iso2: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'iso2' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    

@dataclass_json
@dataclass
class PutReturnsRmaResponseV2ConsigneeV2:
    address1: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'address1' }})
    address2: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'address2' }})
    address_locality: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'addressLocality' }})
    address_region: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'addressRegion' }})
    company_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'companyName' }})
    country: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'country' }})
    email: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'email' }})
    first_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'firstName' }})
    id: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    iso: Optional[PutReturnsRmaResponseV2ConsigneeV2IsoCountryV2] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'iso' }})
    last_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lastName' }})
    phone: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'phone' }})
    postal_code: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'postalCode' }})
    updated_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'updatedAt', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    updated_by: Optional[shared.OnereturnsGetResponses200ContentApplication1jsonSchemaPropertiesDataItemsPropertiesUpdatedBy] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'updatedBy' }})
    

@dataclass_json
@dataclass
class PutReturnsRmaResponseV2:
    items: List[PutReturnsRmaResponseV2Items] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'items' }})
    merchant_order_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'merchantOrderId' }})
    recipient: PutReturnsRmaResponseV2ConsigneeV2 = field(default=None, metadata={'dataclasses_json': { 'field_name': 'recipient' }})
    rma_number: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'rmaNumber' }})
    

@dataclass
class PutReturnsResponse:
    content_type: str = field(default=None)
    rma_response_v2: Optional[PutReturnsRmaResponseV2] = field(default=None)
    status_code: int = field(default=None)
    oneorders_get_responses_404_content_application_1json_schema: Optional[shared.OneordersGetResponses404ContentApplication1jsonSchema] = field(default=None)
    onereturns_put_responses_201_content_application_1json_schema: Optional[shared.OnereturnsPutResponses201ContentApplication1jsonSchema] = field(default=None)
    
