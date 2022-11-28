from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class OneordersPostRequestBodyContentApplication1jsonSchemaPropertiesRecipient:
    address1: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('address1') }})
    address_locality: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('addressLocality') }})
    address_region: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('addressRegion') }})
    country: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('country') }})
    email: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('email') }})
    first_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('firstName') }})
    last_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('lastName') }})
    phone: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('phone') }})
    address2: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('address2') }})
    company_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('companyName') }})
    postal_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('postalCode') }})
    
