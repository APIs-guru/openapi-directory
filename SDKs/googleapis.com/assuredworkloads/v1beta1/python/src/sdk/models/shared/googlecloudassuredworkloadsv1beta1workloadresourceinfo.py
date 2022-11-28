from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class GoogleCloudAssuredworkloadsV1beta1WorkloadResourceInfoResourceTypeEnum(str, Enum):
    RESOURCE_TYPE_UNSPECIFIED = "RESOURCE_TYPE_UNSPECIFIED"
    CONSUMER_PROJECT = "CONSUMER_PROJECT"
    CONSUMER_FOLDER = "CONSUMER_FOLDER"
    ENCRYPTION_KEYS_PROJECT = "ENCRYPTION_KEYS_PROJECT"
    KEYRING = "KEYRING"


@dataclass_json
@dataclass
class GoogleCloudAssuredworkloadsV1beta1WorkloadResourceInfo:
    r"""GoogleCloudAssuredworkloadsV1beta1WorkloadResourceInfo
    Represent the resources that are children of this Workload.
    """
    
    resource_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('resourceId') }})
    resource_type: Optional[GoogleCloudAssuredworkloadsV1beta1WorkloadResourceInfoResourceTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('resourceType') }})
    
