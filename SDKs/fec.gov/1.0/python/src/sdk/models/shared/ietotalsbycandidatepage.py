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
class IeTotalsByCandidatePage:
    pagination: Optional[OffsetInfo] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pagination') }})
    results: Optional[List[IeTotalsByCandidate]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('results') }})
    
