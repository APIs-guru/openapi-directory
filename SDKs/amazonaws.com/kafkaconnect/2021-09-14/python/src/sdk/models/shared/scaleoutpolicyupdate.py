from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class ScaleOutPolicyUpdate:
    r"""ScaleOutPolicyUpdate
    An update to the connector's scale-out policy.
    """
    
    cpu_utilization_percentage: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('cpuUtilizationPercentage') }})
    
