from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class AgeRange:
    r"""AgeRange
    <p>Structure containing the estimated age range, in years, for a face.</p> <p>Amazon Rekognition estimates an age range for faces detected in the input image. Estimated age ranges can overlap. A face of a 5-year-old might have an estimated range of 4-6, while the face of a 6-year-old might have an estimated range of 4-8.</p>
    """
    
    high: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('High') }})
    low: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Low') }})
    
