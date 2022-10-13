from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class OneordersPostRequestBodyContentApplication1jsonSchemaPropertiesRecipient:
    address1: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'address1' }})
    address2: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'address2' }})
    address_locality: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'addressLocality' }})
    address_region: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'addressRegion' }})
    company_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'companyName' }})
    country: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'country' }})
    email: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'email' }})
    first_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'firstName' }})
    last_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lastName' }})
    phone: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'phone' }})
    postal_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'postalCode' }})
    
