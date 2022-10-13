from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import googlecloudassuredworkloadsv1beta1violation


@dataclass_json
@dataclass
class GoogleCloudAssuredworkloadsV1beta1ListViolationsResponse:
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    violations: Optional[List[googlecloudassuredworkloadsv1beta1violation.GoogleCloudAssuredworkloadsV1beta1Violation]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'violations' }})
    
