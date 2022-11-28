from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class EstimationUpdateAPIModelStatusEnum(str, Enum):
    DRAFT = "Draft"
    ACCEPTED = "Accepted"
    REJECTED = "Rejected"


@dataclass_json
@dataclass
class EstimationUpdateAPIModel:
    attachments: Optional[List[EstimationUpdateAttachmentAPIModel]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Attachments') }})
    client_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ClientId') }})
    cloned_from_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ClonedFromId') }})
    currency_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CurrencyId') }})
    expires_on: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ExpiresOn'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Id') }})
    issued_on: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('IssuedOn'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    items: Optional[List[EstimationUpdateItemAPIModel]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Items') }})
    notes: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Notes') }})
    number: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Number') }})
    payment_gateways: Optional[List[EstimationGatewayAPIModel]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PaymentGateways') }})
    po_number: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PoNumber') }})
    status: Optional[EstimationUpdateAPIModelStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Status') }})
    terms: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Terms') }})
    
