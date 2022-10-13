from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class GoogleCloudApigeeV1DeploymentChangeReportRoutingDeployment:
    api_proxy: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'apiProxy' }})
    basepath: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'basepath' }})
    environment: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'environment' }})
    revision: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'revision' }})
    
