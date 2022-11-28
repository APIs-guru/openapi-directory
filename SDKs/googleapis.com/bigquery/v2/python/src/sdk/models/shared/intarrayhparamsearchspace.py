from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class IntArrayHparamSearchSpace:
    r"""IntArrayHparamSearchSpace
    Search space for int array.
    """
    
    candidates: Optional[List[IntArray]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('candidates') }})
    
