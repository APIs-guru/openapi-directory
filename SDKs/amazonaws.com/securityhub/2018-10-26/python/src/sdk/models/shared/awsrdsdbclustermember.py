from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class AwsRdsDbClusterMember:
    db_cluster_parameter_group_status: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DbClusterParameterGroupStatus' }})
    db_instance_identifier: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DbInstanceIdentifier' }})
    is_cluster_writer: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'IsClusterWriter' }})
    promotion_tier: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PromotionTier' }})
    
