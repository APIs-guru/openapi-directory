from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import responsespecification
from . import promptspecification


@dataclass_json
@dataclass
class IntentConfirmationSetting:
    active: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'active' }})
    declination_response: responsespecification.ResponseSpecification = field(default=None, metadata={'dataclasses_json': { 'field_name': 'declinationResponse' }})
    prompt_specification: promptspecification.PromptSpecification = field(default=None, metadata={'dataclasses_json': { 'field_name': 'promptSpecification' }})
    
