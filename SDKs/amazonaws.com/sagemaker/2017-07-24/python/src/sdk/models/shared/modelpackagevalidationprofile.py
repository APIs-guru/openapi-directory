from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from . import transformjobdefinition


@dataclass_json
@dataclass
class ModelPackageValidationProfile:
    profile_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ProfileName' }})
    transform_job_definition: transformjobdefinition.TransformJobDefinition = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TransformJobDefinition' }})
    
