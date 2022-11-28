from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class PaginationCoverageModeEnum(str, Enum):
    NATIVE = "native"
    VIRTUAL = "virtual"


@dataclass_json
@dataclass
class PaginationCoverage:
    limit_support: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('limit_support') }})
    mode: Optional[PaginationCoverageModeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mode') }})
    paging_support: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('paging_support') }})
    
