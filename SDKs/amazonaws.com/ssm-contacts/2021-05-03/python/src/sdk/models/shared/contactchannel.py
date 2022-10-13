from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import activationstatus_enum
from . import contactchanneladdress
from . import channeltype_enum


@dataclass_json
@dataclass
class ContactChannel:
    activation_status: activationstatus_enum.ActivationStatusEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ActivationStatus' }})
    contact_arn: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ContactArn' }})
    contact_channel_arn: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ContactChannelArn' }})
    delivery_address: contactchanneladdress.ContactChannelAddress = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DeliveryAddress' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Name' }})
    type: Optional[channeltype_enum.ChannelTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Type' }})
    
