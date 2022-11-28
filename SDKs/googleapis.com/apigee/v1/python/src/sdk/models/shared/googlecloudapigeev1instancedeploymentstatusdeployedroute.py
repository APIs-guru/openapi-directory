from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class GoogleCloudApigeeV1InstanceDeploymentStatusDeployedRoute:
    r"""GoogleCloudApigeeV1InstanceDeploymentStatusDeployedRoute
    Route deployed in the ingress routing table.
    """
    
    basepath: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('basepath') }})
    envgroup: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('envgroup') }})
    environment: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('environment') }})
    percentage: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('percentage') }})
    
