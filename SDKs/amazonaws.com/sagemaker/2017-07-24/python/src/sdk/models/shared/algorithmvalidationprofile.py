from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import trainingjobdefinition
from . import transformjobdefinition


@dataclass_json
@dataclass
class AlgorithmValidationProfile:
    profile_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ProfileName' }})
    training_job_definition: trainingjobdefinition.TrainingJobDefinition = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TrainingJobDefinition' }})
    transform_job_definition: Optional[transformjobdefinition.TransformJobDefinition] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TransformJobDefinition' }})
    
