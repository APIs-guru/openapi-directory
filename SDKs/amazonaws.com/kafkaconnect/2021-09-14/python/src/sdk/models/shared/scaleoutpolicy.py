from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class ScaleOutPolicy:
    r"""ScaleOutPolicy
    The scale-out policy for the connector.
    """
    
    cpu_utilization_percentage: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('cpuUtilizationPercentage') }})
    
