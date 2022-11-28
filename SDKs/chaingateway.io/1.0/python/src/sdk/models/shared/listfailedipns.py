from dataclasses import dataclass, field
from typing import List
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ListFailedIPNs:
    failed_ipns: List[FailedIpn] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('failed_ipns') }})
    ok: bool = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ok') }})
    
