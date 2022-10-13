from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import processingjob
from . import trainingjob
from . import transformjob


@dataclass_json
@dataclass
class TrialComponentSourceDetail:
    processing_job: Optional[processingjob.ProcessingJob] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ProcessingJob' }})
    source_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SourceArn' }})
    training_job: Optional[trainingjob.TrainingJob] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TrainingJob' }})
    transform_job: Optional[transformjob.TransformJob] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TransformJob' }})
    
