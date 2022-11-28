from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class Api2ModelsRecipesFeedbackDto:
    feedback: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('feedback') }, 'form': { 'field_name': 'feedback' }})
    
