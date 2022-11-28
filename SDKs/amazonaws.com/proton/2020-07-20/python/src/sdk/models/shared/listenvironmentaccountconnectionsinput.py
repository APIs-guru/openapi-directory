from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ListEnvironmentAccountConnectionsInput:
    requested_by: EnvironmentAccountConnectionRequesterAccountTypeEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('requestedBy') }})
    environment_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('environmentName') }})
    max_results: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('maxResults') }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextToken') }})
    statuses: Optional[List[EnvironmentAccountConnectionStatusEnum]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('statuses') }})
    
