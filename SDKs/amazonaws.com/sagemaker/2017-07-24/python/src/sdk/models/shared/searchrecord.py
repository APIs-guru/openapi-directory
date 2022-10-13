from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import endpoint
from . import experiment
from . import featuregroup
from . import modelpackage
from . import modelpackagegroup
from . import pipeline
from . import pipelineexecution
from . import project
from . import trainingjob
from . import trial
from . import trialcomponent


@dataclass_json
@dataclass
class SearchRecord:
    endpoint: Optional[endpoint.Endpoint] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Endpoint' }})
    experiment: Optional[experiment.Experiment] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Experiment' }})
    feature_group: Optional[featuregroup.FeatureGroup] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FeatureGroup' }})
    model_package: Optional[modelpackage.ModelPackage] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ModelPackage' }})
    model_package_group: Optional[modelpackagegroup.ModelPackageGroup] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ModelPackageGroup' }})
    pipeline: Optional[pipeline.Pipeline] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Pipeline' }})
    pipeline_execution: Optional[pipelineexecution.PipelineExecution] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PipelineExecution' }})
    project: Optional[project.Project] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Project' }})
    training_job: Optional[trainingjob.TrainingJob] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TrainingJob' }})
    trial: Optional[trial.Trial] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Trial' }})
    trial_component: Optional[trialcomponent.TrialComponent] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TrialComponent' }})
    
