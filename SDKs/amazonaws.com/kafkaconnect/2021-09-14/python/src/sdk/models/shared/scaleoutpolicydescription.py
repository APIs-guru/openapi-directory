from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class ScaleOutPolicyDescription:
    r"""ScaleOutPolicyDescription
    The description of the scale-out policy for the connector.
    """
    
    cpu_utilization_percentage: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cpuUtilizationPercentage') }})
    
