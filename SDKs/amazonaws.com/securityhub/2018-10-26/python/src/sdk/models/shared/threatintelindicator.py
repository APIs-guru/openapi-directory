from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ThreatIntelIndicator:
    r"""ThreatIntelIndicator
    Details about the threat intelligence related to a finding.
    """
    
    category: Optional[ThreatIntelIndicatorCategoryEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Category') }})
    last_observed_at: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LastObservedAt') }})
    source: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Source') }})
    source_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SourceUrl') }})
    type: Optional[ThreatIntelIndicatorTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Type') }})
    value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Value') }})
    
