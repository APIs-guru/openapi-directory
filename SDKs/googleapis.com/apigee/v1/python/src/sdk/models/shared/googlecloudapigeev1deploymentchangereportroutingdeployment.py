from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class GoogleCloudApigeeV1DeploymentChangeReportRoutingDeployment:
    r"""GoogleCloudApigeeV1DeploymentChangeReportRoutingDeployment
    Tuple representing a base path and the deployment containing it.
    """
    
    api_proxy: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('apiProxy') }})
    basepath: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('basepath') }})
    environment: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('environment') }})
    revision: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('revision') }})
    
