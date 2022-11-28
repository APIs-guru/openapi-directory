from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class BiEngineStatistics:
    bi_engine_mode: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('biEngineMode') }})
    bi_engine_reasons: Optional[List[BiEngineReason]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('biEngineReasons') }})
    
