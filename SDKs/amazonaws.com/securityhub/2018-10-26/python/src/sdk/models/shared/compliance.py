from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class Compliance:
    r"""Compliance
    Contains finding details that are specific to control-based findings. Only returned for findings generated from controls.
    """
    
    related_requirements: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RelatedRequirements') }})
    status: Optional[ComplianceStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Status') }})
    status_reasons: Optional[List[StatusReason]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('StatusReasons') }})
    
