from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import contactchanneladdress


@dataclass_json
@dataclass
class UpdateContactChannelRequest:
    contact_channel_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ContactChannelId' }})
    delivery_address: Optional[contactchanneladdress.ContactChannelAddress] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DeliveryAddress' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Name' }})
    
