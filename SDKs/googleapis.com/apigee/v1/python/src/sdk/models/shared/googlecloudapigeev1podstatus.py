from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class GoogleCloudApigeeV1PodStatus:
    app_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'appVersion' }})
    deployment_status: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'deploymentStatus' }})
    deployment_status_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'deploymentStatusTime' }})
    deployment_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'deploymentTime' }})
    pod_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'podName' }})
    pod_status: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'podStatus' }})
    pod_status_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'podStatusTime' }})
    status_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'statusCode' }})
    status_code_details: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'statusCodeDetails' }})
    
