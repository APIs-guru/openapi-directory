from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleCloudApigeeV1ListEnvironmentResourcesResponse:
    r"""GoogleCloudApigeeV1ListEnvironmentResourcesResponse
    Response for ListEnvironmentResources
    """
    
    resource_file: Optional[List[GoogleCloudApigeeV1ResourceFile]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('resourceFile') }})
    
