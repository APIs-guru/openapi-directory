from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import contactchanneladdress
from . import channeltype_enum


@dataclass_json
@dataclass
class CreateContactChannelRequest:
    contact_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ContactId' }})
    defer_activation: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DeferActivation' }})
    delivery_address: contactchanneladdress.ContactChannelAddress = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DeliveryAddress' }})
    idempotency_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'IdempotencyToken' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Name' }})
    type: channeltype_enum.ChannelTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Type' }})
    
