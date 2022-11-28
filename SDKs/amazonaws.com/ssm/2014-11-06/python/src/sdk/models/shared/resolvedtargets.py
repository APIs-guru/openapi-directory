from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class ResolvedTargets:
    r"""ResolvedTargets
    Information about targets that resolved during the Automation execution.
    """
    
    parameter_values: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ParameterValues') }})
    truncated: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Truncated') }})
    
