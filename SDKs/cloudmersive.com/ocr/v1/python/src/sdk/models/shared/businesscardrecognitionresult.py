from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class BusinessCardRecognitionResult:
    address_string: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AddressString' }})
    business_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'BusinessName' }})
    email_address: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EmailAddress' }})
    person_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PersonName' }})
    person_title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PersonTitle' }})
    phone_number: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PhoneNumber' }})
    successful: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Successful' }})
    timestamp: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Timestamp', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    
