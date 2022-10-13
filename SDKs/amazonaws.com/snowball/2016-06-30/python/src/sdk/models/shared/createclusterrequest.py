from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import jobtype_enum
from . import notification
from . import ondeviceserviceconfiguration
from . import remotemanagement_enum
from . import jobresource
from . import shippingoption_enum
from . import snowballtype_enum
from . import taxdocuments


@dataclass_json
@dataclass
class CreateClusterRequest:
    address_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AddressId' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Description' }})
    forwarding_address_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ForwardingAddressId' }})
    job_type: jobtype_enum.JobTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'JobType' }})
    kms_key_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'KmsKeyARN' }})
    notification: Optional[notification.Notification] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Notification' }})
    on_device_service_configuration: Optional[ondeviceserviceconfiguration.OnDeviceServiceConfiguration] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'OnDeviceServiceConfiguration' }})
    remote_management: Optional[remotemanagement_enum.RemoteManagementEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RemoteManagement' }})
    resources: jobresource.JobResource = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Resources' }})
    role_arn: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RoleARN' }})
    shipping_option: shippingoption_enum.ShippingOptionEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ShippingOption' }})
    snowball_type: snowballtype_enum.SnowballTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SnowballType' }})
    tax_documents: Optional[taxdocuments.TaxDocuments] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TaxDocuments' }})
    
