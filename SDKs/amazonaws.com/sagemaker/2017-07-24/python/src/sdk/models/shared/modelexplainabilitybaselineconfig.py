from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ModelExplainabilityBaselineConfig:
    r"""ModelExplainabilityBaselineConfig
    The configuration for a baseline model explainability job.
    """
    
    baselining_job_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('BaseliningJobName') }})
    constraints_resource: Optional[MonitoringConstraintsResource] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ConstraintsResource') }})
    
