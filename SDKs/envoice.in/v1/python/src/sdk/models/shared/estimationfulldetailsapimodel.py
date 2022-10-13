from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import estimationactivityapimodel
from . import estimationattachmentapimodel
from . import clientdetailsapimodel
from . import currencydetailsapimodel
from . import estimationitemapimodel
from . import estimationgatewayapimodel

class EstimationFullDetailsAPIModelStatusEnum(str, Enum):
    DRAFT = "Draft"
    ACCEPTED = "Accepted"
    REJECTED = "Rejected"


@dataclass_json
@dataclass
class EstimationFullDetailsAPIModel:
    access_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AccessToken' }})
    activities: Optional[List[estimationactivityapimodel.EstimationActivityAPIModel]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Activities' }})
    attachments: Optional[List[estimationattachmentapimodel.EstimationAttachmentAPIModel]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Attachments' }})
    client: Optional[clientdetailsapimodel.ClientDetailsAPIModel] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Client' }})
    cloned_from_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ClonedFromId' }})
    currency: Optional[currencydetailsapimodel.CurrencyDetailsAPIModel] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Currency' }})
    discount_amount: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DiscountAmount' }})
    expires_on: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ExpiresOn', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Id' }})
    issued_on: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'IssuedOn', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    items: Optional[List[estimationitemapimodel.EstimationItemAPIModel]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Items' }})
    notes: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Notes' }})
    number: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Number' }})
    payment_gateways: Optional[List[estimationgatewayapimodel.EstimationGatewayAPIModel]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PaymentGateways' }})
    po_number: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PoNumber' }})
    status: Optional[EstimationFullDetailsAPIModelStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Status' }})
    sub_total_amount: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SubTotalAmount' }})
    tax_amount: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TaxAmount' }})
    terms: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Terms' }})
    total_amount: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TotalAmount' }})
    
