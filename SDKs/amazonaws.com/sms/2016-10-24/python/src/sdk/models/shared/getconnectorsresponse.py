from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GetConnectorsResponse:
    connector_list: Optional[List[Connector]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('connectorList') }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextToken') }})
    
