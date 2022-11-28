from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleCloudApigeeV1DeploymentChangeReportRoutingConflict:
    r"""GoogleCloudApigeeV1DeploymentChangeReportRoutingConflict
    Describes a routing conflict that may cause a deployment not to receive traffic at some base path.
    """
    
    conflicting_deployment: Optional[GoogleCloudApigeeV1DeploymentChangeReportRoutingDeployment] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('conflictingDeployment') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    environment_group: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('environmentGroup') }})
    
