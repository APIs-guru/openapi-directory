from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class CreateContactChannelRequest:
    contact_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ContactId') }})
    delivery_address: ContactChannelAddress = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('DeliveryAddress') }})
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Name') }})
    type: ChannelTypeEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Type') }})
    defer_activation: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DeferActivation') }})
    idempotency_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('IdempotencyToken') }})
    
