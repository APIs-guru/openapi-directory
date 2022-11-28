from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class CanaryRunConfigOutput:
    r"""CanaryRunConfigOutput
    A structure that contains information about a canary run.
    """
    
    active_tracing: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ActiveTracing') }})
    memory_in_mb: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MemoryInMB') }})
    timeout_in_seconds: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TimeoutInSeconds') }})
    
