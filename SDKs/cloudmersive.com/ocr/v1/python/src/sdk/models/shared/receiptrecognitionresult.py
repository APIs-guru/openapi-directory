from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import receiptlineitem


@dataclass_json
@dataclass
class ReceiptRecognitionResult:
    address_string: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AddressString' }})
    business_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'BusinessName' }})
    business_website: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'BusinessWebsite' }})
    phone_number: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PhoneNumber' }})
    receipt_items: Optional[List[receiptlineitem.ReceiptLineItem]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ReceiptItems' }})
    receipt_sub_total: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ReceiptSubTotal' }})
    receipt_total: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ReceiptTotal' }})
    successful: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Successful' }})
    timestamp: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Timestamp', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    
