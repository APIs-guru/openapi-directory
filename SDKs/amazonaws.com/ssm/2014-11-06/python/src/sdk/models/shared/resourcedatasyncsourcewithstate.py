from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ResourceDataSyncSourceWithState:
    r"""ResourceDataSyncSourceWithState
    <p>The data type name for including resource data sync state. There are four sync states:</p> <p> <code>OrganizationNotExists</code> (Your organization doesn't exist)</p> <p> <code>NoPermissions</code> (The system can't locate the service-linked role. This role is automatically created when a user creates a resource data sync in Amazon Web Services Systems Manager Explorer.)</p> <p> <code>InvalidOrganizationalUnit</code> (You specified or selected an invalid unit in the resource data sync configuration.)</p> <p> <code>TrustedAccessDisabled</code> (You disabled Systems Manager access in the organization in Organizations.)</p>
    """
    
    aws_organizations_source: Optional[ResourceDataSyncAwsOrganizationsSource] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AwsOrganizationsSource') }})
    enable_all_ops_data_sources: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EnableAllOpsDataSources') }})
    include_future_regions: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('IncludeFutureRegions') }})
    source_regions: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SourceRegions') }})
    source_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SourceType') }})
    state: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('State') }})
    
