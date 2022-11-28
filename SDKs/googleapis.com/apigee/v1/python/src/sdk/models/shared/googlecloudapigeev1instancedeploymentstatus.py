from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleCloudApigeeV1InstanceDeploymentStatus:
    r"""GoogleCloudApigeeV1InstanceDeploymentStatus
    The status of a deployment as reported by a single instance.
    """
    
    deployed_revisions: Optional[List[GoogleCloudApigeeV1InstanceDeploymentStatusDeployedRevision]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deployedRevisions') }})
    deployed_routes: Optional[List[GoogleCloudApigeeV1InstanceDeploymentStatusDeployedRoute]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deployedRoutes') }})
    instance: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('instance') }})
    
