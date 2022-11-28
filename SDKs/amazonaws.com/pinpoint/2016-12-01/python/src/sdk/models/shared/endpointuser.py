from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class EndpointUser:
    r"""EndpointUser
    Specifies data for one or more attributes that describe the user who's associated with an endpoint.
    """
    
    user_attributes: Optional[dict[str, List[str]]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('UserAttributes') }})
    user_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('UserId') }})
    
