from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class GetMlModelInput:
    ml_model_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('MLModelId') }})
    verbose: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Verbose') }})
    
