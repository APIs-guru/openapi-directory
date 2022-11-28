from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class AffiliateVideoSearchResponse:
    auto_corrections: Optional[AutoCorrections] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('auto_corrections') }})
    videos: Optional[List[AffiliateVideo]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('videos') }})
    
