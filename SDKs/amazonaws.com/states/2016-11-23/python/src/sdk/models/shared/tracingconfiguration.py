from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class TracingConfiguration:
    r"""TracingConfiguration
    Selects whether or not the state machine's AWS X-Ray tracing is enabled. Default is <code>false</code> 
    """
    
    enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('enabled') }})
    
