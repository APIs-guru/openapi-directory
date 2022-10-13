from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import googlecloudassuredworkloadsv1workload


@dataclass_json
@dataclass
class GoogleCloudAssuredworkloadsV1ListWorkloadsResponse:
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    workloads: Optional[List[googlecloudassuredworkloadsv1workload.GoogleCloudAssuredworkloadsV1Workload]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'workloads' }})
    
