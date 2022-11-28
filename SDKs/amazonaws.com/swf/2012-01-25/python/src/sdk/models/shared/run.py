from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class Run:
    r"""Run
    Specifies the <code>runId</code> of a workflow execution.
    """
    
    run_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('runId') }})
    
