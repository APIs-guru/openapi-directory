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
class ClusterMetadata:
    r"""ClusterMetadata
    Contains metadata about a specific cluster.
    """
    
    address_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AddressId') }})
    cluster_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ClusterId') }})
    cluster_state: Optional[ClusterStateEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ClusterState') }})
    creation_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CreationDate'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Description') }})
    forwarding_address_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ForwardingAddressId') }})
    job_type: Optional[JobTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('JobType') }})
    kms_key_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('KmsKeyARN') }})
    notification: Optional[Notification] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Notification') }})
    on_device_service_configuration: Optional[OnDeviceServiceConfiguration] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('OnDeviceServiceConfiguration') }})
    resources: Optional[JobResource] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Resources') }})
    role_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RoleARN') }})
    shipping_option: Optional[ShippingOptionEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ShippingOption') }})
    snowball_type: Optional[SnowballTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SnowballType') }})
    tax_documents: Optional[TaxDocuments] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TaxDocuments') }})
    
