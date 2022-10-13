from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from . import customerpostaladdress


@dataclass_json
@dataclass
class Customer:
    alternate_email: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'alternateEmail' }})
    customer_creation_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'customerCreationTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    customer_domain: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'customerDomain' }})
    etag: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'etag' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'kind' }})
    language: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'language' }})
    phone_number: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'phoneNumber' }})
    postal_address: Optional[customerpostaladdress.CustomerPostalAddress] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'postalAddress' }})
    
