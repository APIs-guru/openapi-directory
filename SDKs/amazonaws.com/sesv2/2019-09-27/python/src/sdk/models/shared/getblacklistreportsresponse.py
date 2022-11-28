from dataclasses import dataclass, field
from typing import List
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GetBlacklistReportsResponse:
    r"""GetBlacklistReportsResponse
    An object that contains information about blacklist events.
    """
    
    blacklist_report: dict[str, List[BlacklistEntry]] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('BlacklistReport') }})
    
