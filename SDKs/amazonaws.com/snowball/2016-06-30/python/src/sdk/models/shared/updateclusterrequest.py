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
class UpdateClusterRequest:
    cluster_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ClusterId') }})
    address_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AddressId') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Description') }})
    forwarding_address_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ForwardingAddressId') }})
    notification: Optional[Notification] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Notification') }})
    on_device_service_configuration: Optional[OnDeviceServiceConfiguration] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('OnDeviceServiceConfiguration') }})
    resources: Optional[JobResource] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Resources') }})
    role_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RoleARN') }})
    shipping_option: Optional[ShippingOptionEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ShippingOption') }})
    
