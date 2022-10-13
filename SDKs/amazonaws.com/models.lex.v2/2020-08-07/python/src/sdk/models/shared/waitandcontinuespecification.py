from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import responsespecification
from . import stillwaitingresponsespecification
from . import responsespecification


@dataclass_json
@dataclass
class WaitAndContinueSpecification:
    active: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'active' }})
    continue_response: responsespecification.ResponseSpecification = field(default=None, metadata={'dataclasses_json': { 'field_name': 'continueResponse' }})
    still_waiting_response: Optional[stillwaitingresponsespecification.StillWaitingResponseSpecification] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'stillWaitingResponse' }})
    waiting_response: responsespecification.ResponseSpecification = field(default=None, metadata={'dataclasses_json': { 'field_name': 'waitingResponse' }})
    
