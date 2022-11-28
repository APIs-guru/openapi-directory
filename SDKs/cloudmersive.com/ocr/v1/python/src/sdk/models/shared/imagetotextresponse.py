from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class ImageToTextResponse:
    r"""ImageToTextResponse
    Response from an OCR to text operation.  Includes the confience rating and converted text result.
    """
    
    mean_confidence_level: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MeanConfidenceLevel') }})
    text_result: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TextResult') }})
    
