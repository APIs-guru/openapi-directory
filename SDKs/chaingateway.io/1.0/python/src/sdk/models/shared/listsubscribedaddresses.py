from dataclasses import dataclass, field
from typing import List
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ListSubscribedAddresses:
    ipns: List[Ipn] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ipns') }})
    ok: bool = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ok') }})
    
