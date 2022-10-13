from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import googlecloudassuredworkloadsv1beta1workloadcjissettings
from . import googlecloudassuredworkloadsv1beta1workloadcompliancestatus
from . import googlecloudassuredworkloadsv1beta1workloadfedramphighsettings
from . import googlecloudassuredworkloadsv1beta1workloadfedrampmoderatesettings
from . import googlecloudassuredworkloadsv1beta1workloadil4settings
from . import googlecloudassuredworkloadsv1beta1workloadkmssettings
from . import googlecloudassuredworkloadsv1beta1workloadresourcesettings
from . import googlecloudassuredworkloadsv1beta1workloadresourceinfo
from . import googlecloudassuredworkloadsv1beta1workloadsaaenrollmentresponse

class GoogleCloudAssuredworkloadsV1beta1WorkloadComplianceRegimeEnum(str, Enum):
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

class GoogleCloudAssuredworkloadsV1beta1WorkloadKajEnrollmentStateEnum(str, Enum):
    KAJ_ENROLLMENT_STATE_UNSPECIFIED = "KAJ_ENROLLMENT_STATE_UNSPECIFIED"
    KAJ_ENROLLMENT_STATE_PENDING = "KAJ_ENROLLMENT_STATE_PENDING"
    KAJ_ENROLLMENT_STATE_COMPLETE = "KAJ_ENROLLMENT_STATE_COMPLETE"

class GoogleCloudAssuredworkloadsV1beta1WorkloadPartnerEnum(str, Enum):
    PARTNER_UNSPECIFIED = "PARTNER_UNSPECIFIED"
    LOCAL_CONTROLS_BY_S3_NS = "LOCAL_CONTROLS_BY_S3NS"


@dataclass_json
@dataclass
class GoogleCloudAssuredworkloadsV1beta1Workload:
    billing_account: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'billingAccount' }})
    cjis_settings: Optional[googlecloudassuredworkloadsv1beta1workloadcjissettings.GoogleCloudAssuredworkloadsV1beta1WorkloadCjisSettings] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cjisSettings' }})
    compliance_regime: Optional[GoogleCloudAssuredworkloadsV1beta1WorkloadComplianceRegimeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'complianceRegime' }})
    compliance_status: Optional[googlecloudassuredworkloadsv1beta1workloadcompliancestatus.GoogleCloudAssuredworkloadsV1beta1WorkloadComplianceStatus] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'complianceStatus' }})
    compliant_but_disallowed_services: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'compliantButDisallowedServices' }})
    create_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'createTime' }})
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'displayName' }})
    enable_sovereign_controls: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'enableSovereignControls' }})
    etag: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'etag' }})
    fedramp_high_settings: Optional[googlecloudassuredworkloadsv1beta1workloadfedramphighsettings.GoogleCloudAssuredworkloadsV1beta1WorkloadFedrampHighSettings] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fedrampHighSettings' }})
    fedramp_moderate_settings: Optional[googlecloudassuredworkloadsv1beta1workloadfedrampmoderatesettings.GoogleCloudAssuredworkloadsV1beta1WorkloadFedrampModerateSettings] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fedrampModerateSettings' }})
    il4_settings: Optional[googlecloudassuredworkloadsv1beta1workloadil4settings.GoogleCloudAssuredworkloadsV1beta1WorkloadIl4Settings] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'il4Settings' }})
    kaj_enrollment_state: Optional[GoogleCloudAssuredworkloadsV1beta1WorkloadKajEnrollmentStateEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'kajEnrollmentState' }})
    kms_settings: Optional[googlecloudassuredworkloadsv1beta1workloadkmssettings.GoogleCloudAssuredworkloadsV1beta1WorkloadKmsSettings] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'kmsSettings' }})
    labels: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'labels' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    partner: Optional[GoogleCloudAssuredworkloadsV1beta1WorkloadPartnerEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'partner' }})
    provisioned_resources_parent: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'provisionedResourcesParent' }})
    resource_settings: Optional[List[googlecloudassuredworkloadsv1beta1workloadresourcesettings.GoogleCloudAssuredworkloadsV1beta1WorkloadResourceSettings]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'resourceSettings' }})
    resources: Optional[List[googlecloudassuredworkloadsv1beta1workloadresourceinfo.GoogleCloudAssuredworkloadsV1beta1WorkloadResourceInfo]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'resources' }})
    saa_enrollment_response: Optional[googlecloudassuredworkloadsv1beta1workloadsaaenrollmentresponse.GoogleCloudAssuredworkloadsV1beta1WorkloadSaaEnrollmentResponse] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'saaEnrollmentResponse' }})
    
