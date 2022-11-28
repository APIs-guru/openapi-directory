from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleCloudApigeeV1DeploymentChangeReportRoutingChange:
    r"""GoogleCloudApigeeV1DeploymentChangeReportRoutingChange
    Describes a potential routing change that may occur as a result of some deployment operation.
    """
    
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    environment_group: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('environmentGroup') }})
    from_deployment: Optional[GoogleCloudApigeeV1DeploymentChangeReportRoutingDeployment] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fromDeployment') }})
    should_sequence_rollout: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('shouldSequenceRollout') }})
    to_deployment: Optional[GoogleCloudApigeeV1DeploymentChangeReportRoutingDeployment] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('toDeployment') }})
    
