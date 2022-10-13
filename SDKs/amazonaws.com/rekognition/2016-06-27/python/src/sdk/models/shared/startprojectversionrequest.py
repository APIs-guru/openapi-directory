from dataclasses import dataclass, field
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class StartProjectVersionRequest:
    min_inference_units: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MinInferenceUnits' }})
    project_version_arn: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ProjectVersionArn' }})
    
