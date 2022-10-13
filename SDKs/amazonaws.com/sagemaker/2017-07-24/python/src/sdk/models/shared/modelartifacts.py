from dataclasses import dataclass, field
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class ModelArtifacts:
    s3_model_artifacts: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'S3ModelArtifacts' }})
    
