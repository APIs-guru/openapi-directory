from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class SearchRecord:
    r"""SearchRecord
    A single resource returned as part of the <a>Search</a> API response.
    """
    
    endpoint: Optional[Endpoint] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Endpoint') }})
    experiment: Optional[Experiment] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Experiment') }})
    feature_group: Optional[FeatureGroup] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FeatureGroup') }})
    model_package: Optional[ModelPackage] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ModelPackage') }})
    model_package_group: Optional[ModelPackageGroup] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ModelPackageGroup') }})
    pipeline: Optional[Pipeline] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Pipeline') }})
    pipeline_execution: Optional[PipelineExecution] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PipelineExecution') }})
    project: Optional[Project] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Project') }})
    training_job: Optional[TrainingJob] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TrainingJob') }})
    trial: Optional[Trial] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Trial') }})
    trial_component: Optional[TrialComponent] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TrialComponent') }})
    
