from dataclasses import dataclass, field
from typing import List
from dataclasses_json import dataclass_json
from . import failedipn


@dataclass_json
@dataclass
class ListFailedIPNs:
    failed_ipns: List[failedipn.FailedIpn] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'failed_ipns' }})
    ok: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ok' }})
    
