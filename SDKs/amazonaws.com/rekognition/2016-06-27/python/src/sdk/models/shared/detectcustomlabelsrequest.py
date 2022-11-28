from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class DetectCustomLabelsRequest:
    image: Image = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Image') }})
    project_version_arn: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ProjectVersionArn') }})
    max_results: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MaxResults') }})
    min_confidence: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MinConfidence') }})
    
