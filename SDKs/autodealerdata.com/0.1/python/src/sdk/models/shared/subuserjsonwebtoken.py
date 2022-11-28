from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class SubUserJSONWebToken:
    domain: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('domain') }})
    token: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('token') }})
    uuid: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('uuid') }})
    created_on: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('createdOn') }})
    end_points: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('endPoints') }})
    expires: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('expires') }})
    
