from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class PredictResponse:
    r"""PredictResponse
    Response message for PredictionService.Predict.
    """
    
    metadata: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('metadata') }})
    payload: Optional[List[AnnotationPayload]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('payload') }})
    preprocessed_input: Optional[ExamplePayload] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('preprocessedInput') }})
    
