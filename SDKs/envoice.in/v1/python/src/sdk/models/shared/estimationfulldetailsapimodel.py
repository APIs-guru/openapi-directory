from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class EstimationFullDetailsAPIModelStatusEnum(str, Enum):
    DRAFT = "Draft"
    ACCEPTED = "Accepted"
    REJECTED = "Rejected"


@dataclass_json
@dataclass
class EstimationFullDetailsAPIModel:
    access_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AccessToken') }})
    activities: Optional[List[EstimationActivityAPIModel]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Activities') }})
    attachments: Optional[List[EstimationAttachmentAPIModel]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Attachments') }})
    client: Optional[ClientDetailsAPIModel] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Client') }})
    cloned_from_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ClonedFromId') }})
    currency: Optional[CurrencyDetailsAPIModel] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Currency') }})
    discount_amount: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DiscountAmount') }})
    expires_on: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ExpiresOn'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Id') }})
    issued_on: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('IssuedOn'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    items: Optional[List[EstimationItemAPIModel]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Items') }})
    notes: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Notes') }})
    number: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Number') }})
    payment_gateways: Optional[List[EstimationGatewayAPIModel]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PaymentGateways') }})
    po_number: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PoNumber') }})
    status: Optional[EstimationFullDetailsAPIModelStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Status') }})
    sub_total_amount: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SubTotalAmount') }})
    tax_amount: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TaxAmount') }})
    terms: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Terms') }})
    total_amount: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TotalAmount') }})
    
