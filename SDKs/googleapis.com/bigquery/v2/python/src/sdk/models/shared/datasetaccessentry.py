from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class DatasetAccessEntryTargetTypesEnum(str, Enum):
    TARGET_TYPE_UNSPECIFIED = "TARGET_TYPE_UNSPECIFIED"
    VIEWS = "VIEWS"
    ROUTINES = "ROUTINES"


@dataclass_json
@dataclass
class DatasetAccessEntry:
    dataset: Optional[DatasetReference] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dataset') }})
    target_types: Optional[List[DatasetAccessEntryTargetTypesEnum]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('targetTypes') }})
    
