from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ContactChannel:
    r"""ContactChannel
    The method that Incident Manager uses to engage a contact.
    """
    
    activation_status: ActivationStatusEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ActivationStatus') }})
    contact_arn: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ContactArn') }})
    contact_channel_arn: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ContactChannelArn') }})
    delivery_address: ContactChannelAddress = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('DeliveryAddress') }})
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Name') }})
    type: Optional[ChannelTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Type') }})
    
