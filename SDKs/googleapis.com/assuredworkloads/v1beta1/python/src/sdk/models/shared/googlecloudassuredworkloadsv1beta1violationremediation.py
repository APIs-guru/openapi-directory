from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import googlecloudassuredworkloadsv1beta1violationremediationinstructions

class GoogleCloudAssuredworkloadsV1beta1ViolationRemediationRemediationTypeEnum(str, Enum):
    REMEDIATION_TYPE_UNSPECIFIED = "REMEDIATION_TYPE_UNSPECIFIED"
    REMEDIATION_BOOLEAN_ORG_POLICY_VIOLATION = "REMEDIATION_BOOLEAN_ORG_POLICY_VIOLATION"
    REMEDIATION_LIST_ALLOWED_VALUES_ORG_POLICY_VIOLATION = "REMEDIATION_LIST_ALLOWED_VALUES_ORG_POLICY_VIOLATION"
    REMEDIATION_LIST_DENIED_VALUES_ORG_POLICY_VIOLATION = "REMEDIATION_LIST_DENIED_VALUES_ORG_POLICY_VIOLATION"
    REMEDIATION_RESTRICT_CMEK_CRYPTO_KEY_PROJECTS_ORG_POLICY_VIOLATION = "REMEDIATION_RESTRICT_CMEK_CRYPTO_KEY_PROJECTS_ORG_POLICY_VIOLATION"


@dataclass_json
@dataclass
class GoogleCloudAssuredworkloadsV1beta1ViolationRemediation:
    compliant_values: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'compliantValues' }})
    instructions: Optional[googlecloudassuredworkloadsv1beta1violationremediationinstructions.GoogleCloudAssuredworkloadsV1beta1ViolationRemediationInstructions] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'instructions' }})
    remediation_type: Optional[GoogleCloudAssuredworkloadsV1beta1ViolationRemediationRemediationTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'remediationType' }})
    
