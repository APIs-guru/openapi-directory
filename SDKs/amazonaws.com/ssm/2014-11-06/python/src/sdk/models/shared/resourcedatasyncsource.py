from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ResourceDataSyncSource:
    r"""ResourceDataSyncSource
    Information about the source of the data included in the resource data sync.
    """
    
    source_regions: List[str] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('SourceRegions') }})
    source_type: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('SourceType') }})
    aws_organizations_source: Optional[ResourceDataSyncAwsOrganizationsSource] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AwsOrganizationsSource') }})
    enable_all_ops_data_sources: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EnableAllOpsDataSources') }})
    include_future_regions: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('IncludeFutureRegions') }})
    
