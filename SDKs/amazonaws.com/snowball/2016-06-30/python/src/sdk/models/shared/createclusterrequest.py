from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class CreateClusterRequest:
    address_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('AddressId') }})
    job_type: JobTypeEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('JobType') }})
    resources: JobResource = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Resources') }})
    role_arn: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('RoleARN') }})
    shipping_option: ShippingOptionEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ShippingOption') }})
    snowball_type: SnowballTypeEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('SnowballType') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Description') }})
    forwarding_address_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ForwardingAddressId') }})
    kms_key_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('KmsKeyARN') }})
    notification: Optional[Notification] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Notification') }})
    on_device_service_configuration: Optional[OnDeviceServiceConfiguration] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('OnDeviceServiceConfiguration') }})
    remote_management: Optional[RemoteManagementEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RemoteManagement') }})
    tax_documents: Optional[TaxDocuments] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TaxDocuments') }})
    
