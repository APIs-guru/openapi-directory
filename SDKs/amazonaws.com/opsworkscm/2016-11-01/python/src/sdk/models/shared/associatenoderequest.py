from dataclasses import dataclass, field
from typing import List
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class AssociateNodeRequest:
    engine_attributes: List[EngineAttribute] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('EngineAttributes') }})
    node_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('NodeName') }})
    server_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ServerName') }})
    
