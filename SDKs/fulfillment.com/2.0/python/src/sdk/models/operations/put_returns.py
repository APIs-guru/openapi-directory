from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass_json
@dataclass
class PutReturnsRmaRequestV2Items:
    quantity_expected: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('quantityExpected') }})
    sku: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('sku') }})
    

@dataclass_json
@dataclass
class PutReturnsRmaRequestV2:
    items: List[PutReturnsRmaRequestV2Items] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('items') }})
    recipient: shared.OneordersPostRequestBodyContentApplication1jsonSchemaPropertiesRecipient = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('recipient') }})
    rma_number: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('rmaNumber') }})
    merchant_order_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('merchantOrderId') }})
    

@dataclass
class PutReturnsSecurity:
    fdc_auth: shared.SchemeFdcAuth = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass_json
@dataclass
class PutReturnsRmaResponseV2Items:
    quantity_expected: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('quantityExpected') }})
    sku: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('sku') }})
    

@dataclass_json
@dataclass
class PutReturnsRmaResponseV2ConsigneeV2IsoCountryV2:
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    iso2: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('iso2') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    

@dataclass_json
@dataclass
class PutReturnsRmaResponseV2ConsigneeV2:
    address1: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('address1') }})
    address_locality: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('addressLocality') }})
    address_region: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('addressRegion') }})
    country: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('country') }})
    first_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('firstName') }})
    id: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    last_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('lastName') }})
    postal_code: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('postalCode') }})
    address2: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('address2') }})
    company_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('companyName') }})
    email: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('email') }})
    iso: Optional[PutReturnsRmaResponseV2ConsigneeV2IsoCountryV2] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('iso') }})
    phone: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('phone') }})
    updated_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updatedAt'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    updated_by: Optional[shared.OnereturnsGetResponses200ContentApplication1jsonSchemaPropertiesDataItemsPropertiesUpdatedBy] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updatedBy') }})
    

@dataclass_json
@dataclass
class PutReturnsRmaResponseV2:
    items: List[PutReturnsRmaResponseV2Items] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('items') }})
    recipient: PutReturnsRmaResponseV2ConsigneeV2 = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('recipient') }})
    rma_number: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('rmaNumber') }})
    merchant_order_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('merchantOrderId') }})
    

@dataclass
class PutReturnsRequest:
    request: PutReturnsRmaRequestV2 = field(metadata={'request': { 'media_type': 'application/json' }})
    security: PutReturnsSecurity = field()
    

@dataclass
class PutReturnsResponse:
    content_type: str = field()
    status_code: int = field()
    rma_response_v2: Optional[PutReturnsRmaResponseV2] = field(default=None)
    oneorders_get_responses_404_content_application_1json_schema: Optional[shared.OneordersGetResponses404ContentApplication1jsonSchema] = field(default=None)
    onereturns_put_responses_201_content_application_1json_schema: Optional[shared.OnereturnsPutResponses201ContentApplication1jsonSchema] = field(default=None)
    
