from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class DealServingMetadata:
    r"""DealServingMetadata
    Message captures metadata about the serving status of a deal.
    """
    
    deal_pause_status: Optional[DealPauseStatus] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dealPauseStatus') }})
    
