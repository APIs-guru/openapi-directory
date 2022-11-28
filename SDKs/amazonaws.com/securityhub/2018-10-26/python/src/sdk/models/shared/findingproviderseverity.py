from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class FindingProviderSeverity:
    r"""FindingProviderSeverity
    The severity assigned to the finding by the finding provider.
    """
    
    label: Optional[SeverityLabelEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Label') }})
    original: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Original') }})
    
