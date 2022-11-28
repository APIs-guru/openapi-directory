from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class ModelArtifacts:
    r"""ModelArtifacts
    <p>Provides information about the location that is configured for storing model artifacts. </p> <p>Model artifacts are the output that results from training a model, and typically consist of trained parameters, a model defintion that describes how to compute inferences, and other metadata.</p>
    """
    
    s3_model_artifacts: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('S3ModelArtifacts') }})
    
