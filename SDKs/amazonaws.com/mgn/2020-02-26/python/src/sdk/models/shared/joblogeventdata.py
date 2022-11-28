from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class JobLogEventData:
    r"""JobLogEventData
    Job log data
    """
    
    conversion_server_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('conversionServerID') }})
    raw_error: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rawError') }})
    source_server_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sourceServerID') }})
    target_instance_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('targetInstanceID') }})
    
