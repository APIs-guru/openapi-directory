from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import awsredshiftclusterclusterparameterstatus


@dataclass_json
@dataclass
class AwsRedshiftClusterClusterParameterGroup:
    cluster_parameter_status_list: Optional[List[awsredshiftclusterclusterparameterstatus.AwsRedshiftClusterClusterParameterStatus]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ClusterParameterStatusList' }})
    parameter_apply_status: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ParameterApplyStatus' }})
    parameter_group_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ParameterGroupName' }})
    
