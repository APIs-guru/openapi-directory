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
class ReceiptRecognitionResult:
    r"""ReceiptRecognitionResult
    Result of recognizing a receipt, to extract the key information from the receipt
    """
    
    address_string: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AddressString') }})
    business_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('BusinessName') }})
    business_website: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('BusinessWebsite') }})
    phone_number: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PhoneNumber') }})
    receipt_items: Optional[List[ReceiptLineItem]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ReceiptItems') }})
    receipt_sub_total: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ReceiptSubTotal') }})
    receipt_total: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ReceiptTotal') }})
    successful: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Successful') }})
    timestamp: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Timestamp'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    
