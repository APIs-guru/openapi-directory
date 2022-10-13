from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class APICoreDtoDatapointsBrowserBaseDestinationItem:
    email_destination_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'emailDestinationUrl' }})
    mobile_destination_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'mobileDestinationUrl' }})
    spiders_destination_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'spidersDestinationUrl' }})
    
