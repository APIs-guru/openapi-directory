from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class BusinessCardRecognitionResult:
    r"""BusinessCardRecognitionResult
    Result of recognizing a business card, to extract the key information from the business card
    """
    
    address_string: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AddressString') }})
    business_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('BusinessName') }})
    email_address: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EmailAddress') }})
    person_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PersonName') }})
    person_title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PersonTitle') }})
    phone_number: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PhoneNumber') }})
    successful: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Successful') }})
    timestamp: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Timestamp'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    
