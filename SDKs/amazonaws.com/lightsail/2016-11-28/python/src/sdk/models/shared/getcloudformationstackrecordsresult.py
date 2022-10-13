from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import cloudformationstackrecord


@dataclass_json
@dataclass
class GetCloudFormationStackRecordsResult:
    cloud_formation_stack_records: Optional[List[cloudformationstackrecord.CloudFormationStackRecord]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cloudFormationStackRecords' }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    
