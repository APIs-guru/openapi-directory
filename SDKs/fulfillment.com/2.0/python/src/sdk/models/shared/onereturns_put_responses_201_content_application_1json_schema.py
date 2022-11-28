from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class OnereturnsPutResponses201ContentApplication1jsonSchemaItems:
    quantity_expected: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('quantityExpected') }})
    sku: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('sku') }})
    

@dataclass_json
@dataclass
class OnereturnsPutResponses201ContentApplication1jsonSchemaConsigneeV2IsoCountryV2:
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    iso2: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('iso2') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    

@dataclass_json
@dataclass
class OnereturnsPutResponses201ContentApplication1jsonSchemaConsigneeV2:
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
    iso: Optional[OnereturnsPutResponses201ContentApplication1jsonSchemaConsigneeV2IsoCountryV2] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('iso') }})
    phone: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('phone') }})
    updated_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updatedAt'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    updated_by: Optional[OnereturnsGetResponses200ContentApplication1jsonSchemaPropertiesDataItemsPropertiesUpdatedBy] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updatedBy') }})
    

@dataclass_json
@dataclass
class OnereturnsPutResponses201ContentApplication1jsonSchema:
    items: List[OnereturnsPutResponses201ContentApplication1jsonSchemaItems] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('items') }})
    recipient: OnereturnsPutResponses201ContentApplication1jsonSchemaConsigneeV2 = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('recipient') }})
    rma_number: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('rmaNumber') }})
    merchant_order_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('merchantOrderId') }})
    
