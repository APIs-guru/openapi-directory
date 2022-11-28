from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class ComputeResponse:
    r"""ComputeResponse
    Compute information for the simulation job
    """
    
    simulation_unit_limit: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('simulationUnitLimit') }})
    
