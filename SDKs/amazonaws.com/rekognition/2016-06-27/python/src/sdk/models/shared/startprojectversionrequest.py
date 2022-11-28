from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class StartProjectVersionRequest:
    min_inference_units: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('MinInferenceUnits') }})
    project_version_arn: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ProjectVersionArn') }})
    
