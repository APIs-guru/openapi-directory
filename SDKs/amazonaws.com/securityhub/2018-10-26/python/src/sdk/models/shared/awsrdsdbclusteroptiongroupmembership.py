from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class AwsRdsDbClusterOptionGroupMembership:
    r"""AwsRdsDbClusterOptionGroupMembership
    Information about an option group membership for a DB cluster.
    """
    
    db_cluster_option_group_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DbClusterOptionGroupName') }})
    status: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Status') }})
    
