from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class ResponseTimeRootCauseEntity:
    r"""ResponseTimeRootCauseEntity
    A collection of segments and corresponding subsegments associated to a response time warning.
    """
    
    coverage: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Coverage') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Name') }})
    remote: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Remote') }})
    
