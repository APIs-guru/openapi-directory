from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class DoubleHparamSearchSpace:
    r"""DoubleHparamSearchSpace
    Search space for a double hyperparameter.
    """
    
    candidates: Optional[DoubleCandidates] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('candidates') }})
    range: Optional[DoubleRange] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('range') }})
    
