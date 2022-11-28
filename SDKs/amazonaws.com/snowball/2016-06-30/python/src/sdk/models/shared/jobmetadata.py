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
class JobMetadata:
    r"""JobMetadata
    Contains information about a specific job including shipping information, job status, and other important metadata. This information is returned as a part of the response syntax of the <code>DescribeJob</code> action.
    """
    
    address_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AddressId') }})
    cluster_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ClusterId') }})
    creation_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CreationDate'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    data_transfer_progress: Optional[DataTransfer] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DataTransferProgress') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Description') }})
    device_configuration: Optional[DeviceConfiguration] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DeviceConfiguration') }})
    forwarding_address_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ForwardingAddressId') }})
    job_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('JobId') }})
    job_log_info: Optional[JobLogs] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('JobLogInfo') }})
    job_state: Optional[JobStateEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('JobState') }})
    job_type: Optional[JobTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('JobType') }})
    kms_key_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('KmsKeyARN') }})
    long_term_pricing_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LongTermPricingId') }})
    notification: Optional[Notification] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Notification') }})
    on_device_service_configuration: Optional[OnDeviceServiceConfiguration] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('OnDeviceServiceConfiguration') }})
    remote_management: Optional[RemoteManagementEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RemoteManagement') }})
    resources: Optional[JobResource] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Resources') }})
    role_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RoleARN') }})
    shipping_details: Optional[ShippingDetails] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ShippingDetails') }})
    snowball_capacity_preference: Optional[SnowballCapacityEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SnowballCapacityPreference') }})
    snowball_type: Optional[SnowballTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SnowballType') }})
    tax_documents: Optional[TaxDocuments] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TaxDocuments') }})
    
