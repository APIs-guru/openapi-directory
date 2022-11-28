from dataclasses import dataclass, field
from typing import List
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class BaseKpiResult:
    r"""BaseKpiResult
    Provides the results of a query that retrieved the data for a standard metric that applies to an application, campaign, or journey.
    """
    
    rows: List[ResultRow] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Rows') }})
    
