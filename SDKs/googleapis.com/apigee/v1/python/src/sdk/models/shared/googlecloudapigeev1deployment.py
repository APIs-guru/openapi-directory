from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class GoogleCloudApigeeV1DeploymentStateEnum(str, Enum):
    RUNTIME_STATE_UNSPECIFIED = "RUNTIME_STATE_UNSPECIFIED"
    READY = "READY"
    PROGRESSING = "PROGRESSING"
    ERROR = "ERROR"


@dataclass_json
@dataclass
class GoogleCloudApigeeV1Deployment:
    api_proxy: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('apiProxy') }})
    deploy_start_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deployStartTime') }})
    environment: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('environment') }})
    errors: Optional[List[GoogleRPCStatus]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('errors') }})
    instances: Optional[List[GoogleCloudApigeeV1InstanceDeploymentStatus]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('instances') }})
    pods: Optional[List[GoogleCloudApigeeV1PodStatus]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pods') }})
    revision: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('revision') }})
    route_conflicts: Optional[List[GoogleCloudApigeeV1DeploymentChangeReportRoutingConflict]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('routeConflicts') }})
    service_account: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('serviceAccount') }})
    state: Optional[GoogleCloudApigeeV1DeploymentStateEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('state') }})
    
