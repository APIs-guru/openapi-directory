from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class TimingInformation:
    r"""TimingInformation
    Contains server-side performance information for a command. Amazon QLDB captures timing information between the times when it receives the request and when it sends the corresponding response.
    """
    
    processing_time_milliseconds: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ProcessingTimeMilliseconds') }})
    
