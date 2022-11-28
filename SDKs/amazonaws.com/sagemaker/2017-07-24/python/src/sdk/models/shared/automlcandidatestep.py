from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class AutoMlCandidateStep:
    r"""AutoMlCandidateStep
    Information about the steps for a candidate and what step it is working on.
    """
    
    candidate_step_arn: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('CandidateStepArn') }})
    candidate_step_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('CandidateStepName') }})
    candidate_step_type: CandidateStepTypeEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('CandidateStepType') }})
    
