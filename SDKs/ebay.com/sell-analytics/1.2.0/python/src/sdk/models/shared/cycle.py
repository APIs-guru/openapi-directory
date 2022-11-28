from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class Cycle:
    r"""Cycle
    A complex type that describes a program cycle.
    """
    
    cycle_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cycleType') }})
    evaluation_date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('evaluationDate') }})
    evaluation_month: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('evaluationMonth') }})
    
