from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class PipelineExperimentConfig:
    r"""PipelineExperimentConfig
    Specifies the names of the experiment and trial created by a pipeline.
    """
    
    experiment_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ExperimentName') }})
    trial_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TrialName') }})
    
