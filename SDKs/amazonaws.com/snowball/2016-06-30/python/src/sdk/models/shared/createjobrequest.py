from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import deviceconfiguration
from . import jobtype_enum
from . import notification
from . import ondeviceserviceconfiguration
from . import remotemanagement_enum
from . import jobresource
from . import shippingoption_enum
from . import snowballcapacity_enum
from . import snowballtype_enum
from . import taxdocuments


@dataclass_json
@dataclass
class CreateJobRequest:
    address_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AddressId' }})
    cluster_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ClusterId' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Description' }})
    device_configuration: Optional[deviceconfiguration.DeviceConfiguration] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DeviceConfiguration' }})
    forwarding_address_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ForwardingAddressId' }})
    job_type: Optional[jobtype_enum.JobTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'JobType' }})
    kms_key_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'KmsKeyARN' }})
    long_term_pricing_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LongTermPricingId' }})
    notification: Optional[notification.Notification] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Notification' }})
    on_device_service_configuration: Optional[ondeviceserviceconfiguration.OnDeviceServiceConfiguration] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'OnDeviceServiceConfiguration' }})
    remote_management: Optional[remotemanagement_enum.RemoteManagementEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RemoteManagement' }})
    resources: Optional[jobresource.JobResource] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Resources' }})
    role_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RoleARN' }})
    shipping_option: Optional[shippingoption_enum.ShippingOptionEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ShippingOption' }})
    snowball_capacity_preference: Optional[snowballcapacity_enum.SnowballCapacityEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SnowballCapacityPreference' }})
    snowball_type: Optional[snowballtype_enum.SnowballTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SnowballType' }})
    tax_documents: Optional[taxdocuments.TaxDocuments] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TaxDocuments' }})
    
