from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import googlecloudapigeev1addonsconfig
from . import googlecloudapigeev1properties

class GoogleCloudApigeeV1OrganizationBillingTypeEnum(str, Enum):
    BILLING_TYPE_UNSPECIFIED = "BILLING_TYPE_UNSPECIFIED"
    SUBSCRIPTION = "SUBSCRIPTION"
    EVALUATION = "EVALUATION"
    PAYG = "PAYG"

class GoogleCloudApigeeV1OrganizationRuntimeTypeEnum(str, Enum):
    RUNTIME_TYPE_UNSPECIFIED = "RUNTIME_TYPE_UNSPECIFIED"
    CLOUD = "CLOUD"
    HYBRID = "HYBRID"

class GoogleCloudApigeeV1OrganizationStateEnum(str, Enum):
    STATE_UNSPECIFIED = "STATE_UNSPECIFIED"
    CREATING = "CREATING"
    ACTIVE = "ACTIVE"
    DELETING = "DELETING"
    UPDATING = "UPDATING"

class GoogleCloudApigeeV1OrganizationSubscriptionTypeEnum(str, Enum):
    SUBSCRIPTION_TYPE_UNSPECIFIED = "SUBSCRIPTION_TYPE_UNSPECIFIED"
    PAID = "PAID"
    TRIAL = "TRIAL"

class GoogleCloudApigeeV1OrganizationTypeEnum(str, Enum):
    TYPE_UNSPECIFIED = "TYPE_UNSPECIFIED"
    TYPE_TRIAL = "TYPE_TRIAL"
    TYPE_PAID = "TYPE_PAID"
    TYPE_INTERNAL = "TYPE_INTERNAL"


@dataclass_json
@dataclass
class GoogleCloudApigeeV1Organization:
    addons_config: Optional[googlecloudapigeev1addonsconfig.GoogleCloudApigeeV1AddonsConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'addonsConfig' }})
    analytics_region: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'analyticsRegion' }})
    apigee_project_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'apigeeProjectId' }})
    attributes: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'attributes' }})
    authorized_network: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'authorizedNetwork' }})
    billing_type: Optional[GoogleCloudApigeeV1OrganizationBillingTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'billingType' }})
    ca_certificate: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'caCertificate' }})
    created_at: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'createdAt' }})
    customer_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'customerName' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'displayName' }})
    environments: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'environments' }})
    expires_at: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'expiresAt' }})
    last_modified_at: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lastModifiedAt' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    portal_disabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'portalDisabled' }})
    project_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'projectId' }})
    properties: Optional[googlecloudapigeev1properties.GoogleCloudApigeeV1Properties] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'properties' }})
    runtime_database_encryption_key_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'runtimeDatabaseEncryptionKeyName' }})
    runtime_type: Optional[GoogleCloudApigeeV1OrganizationRuntimeTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'runtimeType' }})
    state: Optional[GoogleCloudApigeeV1OrganizationStateEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'state' }})
    subscription_type: Optional[GoogleCloudApigeeV1OrganizationSubscriptionTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'subscriptionType' }})
    type: Optional[GoogleCloudApigeeV1OrganizationTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    
