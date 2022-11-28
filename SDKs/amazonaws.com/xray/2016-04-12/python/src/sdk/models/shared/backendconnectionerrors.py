from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class BackendConnectionErrors:
    r"""BackendConnectionErrors
    <p/>
    """
    
    connection_refused_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ConnectionRefusedCount') }})
    http_code4_xx_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('HTTPCode4XXCount') }})
    http_code5_xx_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('HTTPCode5XXCount') }})
    other_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('OtherCount') }})
    timeout_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TimeoutCount') }})
    unknown_host_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('UnknownHostCount') }})
    
