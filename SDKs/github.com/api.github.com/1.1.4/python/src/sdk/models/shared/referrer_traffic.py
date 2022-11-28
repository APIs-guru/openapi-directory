from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class ReferrerTraffic:
    r"""ReferrerTraffic
    Referrer Traffic
    """
    
    count: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('count') }})
    referrer: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('referrer') }})
    uniques: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('uniques') }})
    
