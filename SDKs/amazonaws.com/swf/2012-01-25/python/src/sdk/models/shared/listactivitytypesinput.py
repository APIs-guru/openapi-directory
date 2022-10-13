from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import registrationstatus_enum


@dataclass_json
@dataclass
class ListActivityTypesInput:
    domain: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'domain' }})
    maximum_page_size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'maximumPageSize' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    registration_status: registrationstatus_enum.RegistrationStatusEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'registrationStatus' }})
    reverse_order: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'reverseOrder' }})
    
