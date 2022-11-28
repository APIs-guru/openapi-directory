from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class SensitiveDataItem:
    r"""SensitiveDataItem
    Provides information about the category, types, and occurrences of sensitive data that produced a sensitive data finding.
    """
    
    category: Optional[SensitiveDataItemCategoryEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('category') }})
    detections: Optional[List[DefaultDetection]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('detections') }})
    total_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('totalCount') }})
    
