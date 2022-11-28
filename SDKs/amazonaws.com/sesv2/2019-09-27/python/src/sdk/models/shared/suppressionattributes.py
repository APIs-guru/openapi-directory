from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class SuppressionAttributes:
    r"""SuppressionAttributes
    An object that contains information about the email address suppression preferences for your account in the current AWS Region.
    """
    
    suppressed_reasons: Optional[List[SuppressionListReasonEnum]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SuppressedReasons') }})
    
