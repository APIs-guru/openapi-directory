from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class AffiliateVideoUrls:
    large_motion: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('large_motion') }})
    large_still: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('large_still') }})
    medium_still: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('medium_still') }})
    small_motion: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('small_motion') }})
    small_still: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('small_still') }})
    
