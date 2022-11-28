from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class ClassificationAnnotation:
    r"""ClassificationAnnotation
    Contains annotation details specific to classification.
    """
    
    score: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('score') }})
    
