from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import notification
from . import ondeviceserviceconfiguration
from . import jobresource
from . import shippingoption_enum
from . import snowballcapacity_enum


@dataclass_json
@dataclass
class UpdateJobRequest:
    address_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AddressId' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Description' }})
    forwarding_address_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ForwardingAddressId' }})
    job_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'JobId' }})
    notification: Optional[notification.Notification] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Notification' }})
    on_device_service_configuration: Optional[ondeviceserviceconfiguration.OnDeviceServiceConfiguration] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'OnDeviceServiceConfiguration' }})
    resources: Optional[jobresource.JobResource] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Resources' }})
    role_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RoleARN' }})
    shipping_option: Optional[shippingoption_enum.ShippingOptionEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ShippingOption' }})
    snowball_capacity_preference: Optional[snowballcapacity_enum.SnowballCapacityEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SnowballCapacityPreference' }})
    
