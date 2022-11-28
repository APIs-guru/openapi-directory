from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class AwsRedshiftClusterClusterParameterStatus:
    r"""AwsRedshiftClusterClusterParameterStatus
    The status of a parameter in a cluster parameter group for an Amazon Redshift cluster.
    """
    
    parameter_apply_error_description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ParameterApplyErrorDescription') }})
    parameter_apply_status: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ParameterApplyStatus') }})
    parameter_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ParameterName') }})
    
