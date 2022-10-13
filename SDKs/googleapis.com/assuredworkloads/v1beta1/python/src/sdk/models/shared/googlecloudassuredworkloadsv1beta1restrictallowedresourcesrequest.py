from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class GoogleCloudAssuredworkloadsV1beta1RestrictAllowedResourcesRequestRestrictionTypeEnum(str, Enum):
    RESTRICTION_TYPE_UNSPECIFIED = "RESTRICTION_TYPE_UNSPECIFIED"
    ALLOW_ALL_GCP_RESOURCES = "ALLOW_ALL_GCP_RESOURCES"
    ALLOW_COMPLIANT_RESOURCES = "ALLOW_COMPLIANT_RESOURCES"


@dataclass_json
@dataclass
class GoogleCloudAssuredworkloadsV1beta1RestrictAllowedResourcesRequest:
    restriction_type: Optional[GoogleCloudAssuredworkloadsV1beta1RestrictAllowedResourcesRequestRestrictionTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'restrictionType' }})
    
