from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import googlecloudapigeev1resourcestatus


@dataclass_json
@dataclass
class GoogleCloudApigeeV1ReportInstanceStatusRequest:
    instance_uid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'instanceUid' }})
    report_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'reportTime' }})
    resources: Optional[List[googlecloudapigeev1resourcestatus.GoogleCloudApigeeV1ResourceStatus]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'resources' }})
    
