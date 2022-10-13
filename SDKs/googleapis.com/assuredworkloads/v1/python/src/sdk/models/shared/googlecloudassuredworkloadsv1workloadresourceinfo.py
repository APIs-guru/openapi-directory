from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class GoogleCloudAssuredworkloadsV1WorkloadResourceInfoResourceTypeEnum(str, Enum):
    RESOURCE_TYPE_UNSPECIFIED = "RESOURCE_TYPE_UNSPECIFIED"
    CONSUMER_PROJECT = "CONSUMER_PROJECT"
    CONSUMER_FOLDER = "CONSUMER_FOLDER"
    ENCRYPTION_KEYS_PROJECT = "ENCRYPTION_KEYS_PROJECT"
    KEYRING = "KEYRING"


@dataclass_json
@dataclass
class GoogleCloudAssuredworkloadsV1WorkloadResourceInfo:
    resource_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'resourceId' }})
    resource_type: Optional[GoogleCloudAssuredworkloadsV1WorkloadResourceInfoResourceTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'resourceType' }})
    
