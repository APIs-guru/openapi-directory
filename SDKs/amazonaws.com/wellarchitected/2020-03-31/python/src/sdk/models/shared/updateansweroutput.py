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
class UpdateAnswerOutput:
    r"""UpdateAnswerOutput
    Output of a update answer call.
    """
    
    answer: Optional[Answer] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Answer') }})
    lens_alias: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LensAlias') }})
    workload_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('WorkloadId') }})
    
