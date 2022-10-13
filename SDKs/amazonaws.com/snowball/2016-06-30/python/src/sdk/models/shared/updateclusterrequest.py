from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import notification
from . import ondeviceserviceconfiguration
from . import jobresource
from . import shippingoption_enum


@dataclass_json
@dataclass
class UpdateClusterRequest:
    address_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AddressId' }})
    cluster_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ClusterId' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Description' }})
    forwarding_address_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ForwardingAddressId' }})
    notification: Optional[notification.Notification] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Notification' }})
    on_device_service_configuration: Optional[ondeviceserviceconfiguration.OnDeviceServiceConfiguration] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'OnDeviceServiceConfiguration' }})
    resources: Optional[jobresource.JobResource] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Resources' }})
    role_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RoleARN' }})
    shipping_option: Optional[shippingoption_enum.ShippingOptionEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ShippingOption' }})
    
