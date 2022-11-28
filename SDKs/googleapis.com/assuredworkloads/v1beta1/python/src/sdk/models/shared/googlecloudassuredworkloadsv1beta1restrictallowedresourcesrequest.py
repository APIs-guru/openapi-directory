from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class GoogleCloudAssuredworkloadsV1beta1RestrictAllowedResourcesRequestRestrictionTypeEnum(str, Enum):
    RESTRICTION_TYPE_UNSPECIFIED = "RESTRICTION_TYPE_UNSPECIFIED"
    ALLOW_ALL_GCP_RESOURCES = "ALLOW_ALL_GCP_RESOURCES"
    ALLOW_COMPLIANT_RESOURCES = "ALLOW_COMPLIANT_RESOURCES"
    APPEND_COMPLIANT_RESOURCES = "APPEND_COMPLIANT_RESOURCES"


@dataclass_json
@dataclass
class GoogleCloudAssuredworkloadsV1beta1RestrictAllowedResourcesRequest:
    r"""GoogleCloudAssuredworkloadsV1beta1RestrictAllowedResourcesRequest
    Request for restricting list of available resources in Workload environment.
    """
    
    restriction_type: Optional[GoogleCloudAssuredworkloadsV1beta1RestrictAllowedResourcesRequestRestrictionTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('restrictionType') }})
    
