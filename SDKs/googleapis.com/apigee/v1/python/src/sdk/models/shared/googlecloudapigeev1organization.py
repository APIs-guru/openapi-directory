from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class GoogleCloudApigeeV1OrganizationBillingTypeEnum(str, Enum):
    BILLING_TYPE_UNSPECIFIED = "BILLING_TYPE_UNSPECIFIED"
    SUBSCRIPTION = "SUBSCRIPTION"
    EVALUATION = "EVALUATION"
    PAYG = "PAYG"

class GoogleCloudApigeeV1OrganizationRuntimeTypeEnum(str, Enum):
    RUNTIME_TYPE_UNSPECIFIED = "RUNTIME_TYPE_UNSPECIFIED"
    CLOUD = "CLOUD"
    HYBRID = "HYBRID"

class GoogleCloudApigeeV1OrganizationTypeEnum(str, Enum):
    TYPE_UNSPECIFIED = "TYPE_UNSPECIFIED"
    TYPE_TRIAL = "TYPE_TRIAL"
    TYPE_PAID = "TYPE_PAID"
    TYPE_INTERNAL = "TYPE_INTERNAL"


@dataclass_json
@dataclass
class GoogleCloudApigeeV1OrganizationInput:
    addons_config: Optional[GoogleCloudApigeeV1AddonsConfigInput] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('addonsConfig') }})
    analytics_region: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('analyticsRegion') }})
    attributes: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('attributes') }})
    authorized_network: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('authorizedNetwork') }})
    billing_type: Optional[GoogleCloudApigeeV1OrganizationBillingTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('billingType') }})
    customer_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('customerName') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('displayName') }})
    portal_disabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('portalDisabled') }})
    properties: Optional[GoogleCloudApigeeV1Properties] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('properties') }})
    runtime_database_encryption_key_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('runtimeDatabaseEncryptionKeyName') }})
    runtime_type: Optional[GoogleCloudApigeeV1OrganizationRuntimeTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('runtimeType') }})
    type: Optional[GoogleCloudApigeeV1OrganizationTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    
