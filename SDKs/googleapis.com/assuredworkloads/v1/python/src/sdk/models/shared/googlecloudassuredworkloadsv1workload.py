from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import googlecloudassuredworkloadsv1workloadkmssettings
from . import googlecloudassuredworkloadsv1workloadresourcesettings
from . import googlecloudassuredworkloadsv1workloadresourceinfo
from . import googlecloudassuredworkloadsv1workloadsaaenrollmentresponse

class GoogleCloudAssuredworkloadsV1WorkloadComplianceRegimeEnum(str, Enum):
    COMPLIANCE_REGIME_UNSPECIFIED = "COMPLIANCE_REGIME_UNSPECIFIED"
    IL4 = "IL4"
    CJIS = "CJIS"
    FEDRAMP_HIGH = "FEDRAMP_HIGH"
    FEDRAMP_MODERATE = "FEDRAMP_MODERATE"
    US_REGIONAL_ACCESS = "US_REGIONAL_ACCESS"
    HIPAA = "HIPAA"
    HITRUST = "HITRUST"
    EU_REGIONS_AND_SUPPORT = "EU_REGIONS_AND_SUPPORT"
    CA_REGIONS_AND_SUPPORT = "CA_REGIONS_AND_SUPPORT"
    ITAR = "ITAR"
    ASSURED_WORKLOADS_FOR_PARTNERS = "ASSURED_WORKLOADS_FOR_PARTNERS"

class GoogleCloudAssuredworkloadsV1WorkloadKajEnrollmentStateEnum(str, Enum):
    KAJ_ENROLLMENT_STATE_UNSPECIFIED = "KAJ_ENROLLMENT_STATE_UNSPECIFIED"
    KAJ_ENROLLMENT_STATE_PENDING = "KAJ_ENROLLMENT_STATE_PENDING"
    KAJ_ENROLLMENT_STATE_COMPLETE = "KAJ_ENROLLMENT_STATE_COMPLETE"

class GoogleCloudAssuredworkloadsV1WorkloadPartnerEnum(str, Enum):
    PARTNER_UNSPECIFIED = "PARTNER_UNSPECIFIED"
    LOCAL_CONTROLS_BY_S3_NS = "LOCAL_CONTROLS_BY_S3NS"


@dataclass_json
@dataclass
class GoogleCloudAssuredworkloadsV1Workload:
    billing_account: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'billingAccount' }})
    compliance_regime: Optional[GoogleCloudAssuredworkloadsV1WorkloadComplianceRegimeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'complianceRegime' }})
    compliant_but_disallowed_services: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'compliantButDisallowedServices' }})
    create_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'createTime' }})
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'displayName' }})
    enable_sovereign_controls: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'enableSovereignControls' }})
    etag: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'etag' }})
    kaj_enrollment_state: Optional[GoogleCloudAssuredworkloadsV1WorkloadKajEnrollmentStateEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'kajEnrollmentState' }})
    kms_settings: Optional[googlecloudassuredworkloadsv1workloadkmssettings.GoogleCloudAssuredworkloadsV1WorkloadKmsSettings] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'kmsSettings' }})
    labels: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'labels' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    partner: Optional[GoogleCloudAssuredworkloadsV1WorkloadPartnerEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'partner' }})
    provisioned_resources_parent: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'provisionedResourcesParent' }})
    resource_settings: Optional[List[googlecloudassuredworkloadsv1workloadresourcesettings.GoogleCloudAssuredworkloadsV1WorkloadResourceSettings]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'resourceSettings' }})
    resources: Optional[List[googlecloudassuredworkloadsv1workloadresourceinfo.GoogleCloudAssuredworkloadsV1WorkloadResourceInfo]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'resources' }})
    saa_enrollment_response: Optional[googlecloudassuredworkloadsv1workloadsaaenrollmentresponse.GoogleCloudAssuredworkloadsV1WorkloadSaaEnrollmentResponse] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'saaEnrollmentResponse' }})
    
