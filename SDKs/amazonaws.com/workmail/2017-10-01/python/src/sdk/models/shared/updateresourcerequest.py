from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import bookingoptions


@dataclass_json
@dataclass
class UpdateResourceRequest:
    booking_options: Optional[bookingoptions.BookingOptions] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'BookingOptions' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Name' }})
    organization_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'OrganizationId' }})
    resource_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ResourceId' }})
    
