from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class EndpointMessageResult:
    r"""EndpointMessageResult
    Provides information about the delivery status and results of sending a message directly to an endpoint.
    """
    
    delivery_status: DeliveryStatusEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('DeliveryStatus') }})
    status_code: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('StatusCode') }})
    address: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Address') }})
    message_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MessageId') }})
    status_message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('StatusMessage') }})
    updated_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('UpdatedToken') }})
    
