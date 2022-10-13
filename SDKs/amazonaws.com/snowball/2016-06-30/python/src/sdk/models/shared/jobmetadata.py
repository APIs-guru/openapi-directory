from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import datatransfer
from . import deviceconfiguration
from . import joblogs
from . import jobstate_enum
from . import jobtype_enum
from . import notification
from . import ondeviceserviceconfiguration
from . import remotemanagement_enum
from . import jobresource
from . import shippingdetails
from . import snowballcapacity_enum
from . import snowballtype_enum
from . import taxdocuments


@dataclass_json
@dataclass
class JobMetadata:
    address_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AddressId' }})
    cluster_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ClusterId' }})
    creation_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CreationDate', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    data_transfer_progress: Optional[datatransfer.DataTransfer] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DataTransferProgress' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Description' }})
    device_configuration: Optional[deviceconfiguration.DeviceConfiguration] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DeviceConfiguration' }})
    forwarding_address_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ForwardingAddressId' }})
    job_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'JobId' }})
    job_log_info: Optional[joblogs.JobLogs] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'JobLogInfo' }})
    job_state: Optional[jobstate_enum.JobStateEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'JobState' }})
    job_type: Optional[jobtype_enum.JobTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'JobType' }})
    kms_key_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'KmsKeyARN' }})
    long_term_pricing_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LongTermPricingId' }})
    notification: Optional[notification.Notification] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Notification' }})
    on_device_service_configuration: Optional[ondeviceserviceconfiguration.OnDeviceServiceConfiguration] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'OnDeviceServiceConfiguration' }})
    remote_management: Optional[remotemanagement_enum.RemoteManagementEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RemoteManagement' }})
    resources: Optional[jobresource.JobResource] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Resources' }})
    role_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RoleARN' }})
    shipping_details: Optional[shippingdetails.ShippingDetails] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ShippingDetails' }})
    snowball_capacity_preference: Optional[snowballcapacity_enum.SnowballCapacityEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SnowballCapacityPreference' }})
    snowball_type: Optional[snowballtype_enum.SnowballTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SnowballType' }})
    tax_documents: Optional[taxdocuments.TaxDocuments] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TaxDocuments' }})
    
