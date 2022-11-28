from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class Severity:
    r"""Severity
    Provides the numerical and qualitative representations of a finding's severity.
    """
    
    description: Optional[SeverityDescriptionEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    score: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('score') }})
    
