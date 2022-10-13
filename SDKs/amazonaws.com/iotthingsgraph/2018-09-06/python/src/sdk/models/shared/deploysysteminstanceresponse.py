from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import systeminstancesummary


@dataclass_json
@dataclass
class DeploySystemInstanceResponse:
    greengrass_deployment_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'greengrassDeploymentId' }})
    summary: systeminstancesummary.SystemInstanceSummary = field(default=None, metadata={'dataclasses_json': { 'field_name': 'summary' }})
    
