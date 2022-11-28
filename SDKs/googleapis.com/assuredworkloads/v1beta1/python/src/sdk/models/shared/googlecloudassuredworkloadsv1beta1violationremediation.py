from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class GoogleCloudAssuredworkloadsV1beta1ViolationRemediationRemediationTypeEnum(str, Enum):
    REMEDIATION_TYPE_UNSPECIFIED = "REMEDIATION_TYPE_UNSPECIFIED"
    REMEDIATION_BOOLEAN_ORG_POLICY_VIOLATION = "REMEDIATION_BOOLEAN_ORG_POLICY_VIOLATION"
    REMEDIATION_LIST_ALLOWED_VALUES_ORG_POLICY_VIOLATION = "REMEDIATION_LIST_ALLOWED_VALUES_ORG_POLICY_VIOLATION"
    REMEDIATION_LIST_DENIED_VALUES_ORG_POLICY_VIOLATION = "REMEDIATION_LIST_DENIED_VALUES_ORG_POLICY_VIOLATION"
    REMEDIATION_RESTRICT_CMEK_CRYPTO_KEY_PROJECTS_ORG_POLICY_VIOLATION = "REMEDIATION_RESTRICT_CMEK_CRYPTO_KEY_PROJECTS_ORG_POLICY_VIOLATION"


@dataclass_json
@dataclass
class GoogleCloudAssuredworkloadsV1beta1ViolationRemediation:
    r"""GoogleCloudAssuredworkloadsV1beta1ViolationRemediation
    Represents remediation guidance to resolve compliance violation for AssuredWorkload
    """
    
    compliant_values: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('compliantValues') }})
    instructions: Optional[GoogleCloudAssuredworkloadsV1beta1ViolationRemediationInstructions] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('instructions') }})
    remediation_type: Optional[GoogleCloudAssuredworkloadsV1beta1ViolationRemediationRemediationTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('remediationType') }})
    
