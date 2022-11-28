from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class AwsRdsDbClusterMember:
    r"""AwsRdsDbClusterMember
    Information about an instance in the DB cluster.
    """
    
    db_cluster_parameter_group_status: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DbClusterParameterGroupStatus') }})
    db_instance_identifier: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DbInstanceIdentifier') }})
    is_cluster_writer: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('IsClusterWriter') }})
    promotion_tier: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PromotionTier') }})
    
