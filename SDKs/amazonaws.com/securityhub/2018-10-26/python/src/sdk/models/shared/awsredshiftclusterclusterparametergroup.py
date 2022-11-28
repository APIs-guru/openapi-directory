from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class AwsRedshiftClusterClusterParameterGroup:
    r"""AwsRedshiftClusterClusterParameterGroup
    A cluster parameter group that is associated with an Amazon Redshift cluster.
    """
    
    cluster_parameter_status_list: Optional[List[AwsRedshiftClusterClusterParameterStatus]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ClusterParameterStatusList') }})
    parameter_apply_status: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ParameterApplyStatus') }})
    parameter_group_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ParameterGroupName') }})
    
