from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import resourcedatasyncawsorganizationssource


@dataclass_json
@dataclass
class ResourceDataSyncSource:
    aws_organizations_source: Optional[resourcedatasyncawsorganizationssource.ResourceDataSyncAwsOrganizationsSource] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AwsOrganizationsSource' }})
    enable_all_ops_data_sources: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EnableAllOpsDataSources' }})
    include_future_regions: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'IncludeFutureRegions' }})
    source_regions: List[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SourceRegions' }})
    source_type: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SourceType' }})
    
