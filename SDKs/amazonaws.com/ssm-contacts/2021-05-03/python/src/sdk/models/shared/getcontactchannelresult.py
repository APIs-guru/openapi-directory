from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GetContactChannelResult:
    contact_arn: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ContactArn') }})
    contact_channel_arn: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ContactChannelArn') }})
    delivery_address: ContactChannelAddress = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('DeliveryAddress') }})
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Name') }})
    type: ChannelTypeEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Type') }})
    activation_status: Optional[ActivationStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ActivationStatus') }})
    
