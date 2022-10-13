from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import responsespecification


@dataclass_json
@dataclass
class IntentClosingSetting:
    active: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'active' }})
    closing_response: responsespecification.ResponseSpecification = field(default=None, metadata={'dataclasses_json': { 'field_name': 'closingResponse' }})
    
