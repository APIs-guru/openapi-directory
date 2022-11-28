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
class BqmlTrainingRunTrainingOptions:
    r"""BqmlTrainingRunTrainingOptions
    [Output-only, Beta] Training options used by this training run. These options are mutable for subsequent training runs. Default values are explicitly stored for options not specified in the input query of the first training run. For subsequent training runs, any option not explicitly specified in the input query will be copied from the previous training run.
    """
    
    early_stop: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('earlyStop') }})
    l1_reg: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('l1Reg') }})
    l2_reg: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('l2Reg') }})
    learn_rate: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('learnRate') }})
    learn_rate_strategy: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('learnRateStrategy') }})
    line_search_init_learn_rate: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lineSearchInitLearnRate') }})
    max_iteration: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('maxIteration') }})
    min_rel_progress: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('minRelProgress') }})
    warm_start: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('warmStart') }})
    

@dataclass_json
@dataclass
class BqmlTrainingRun:
    iteration_results: Optional[List[BqmlIterationResult]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('iterationResults') }})
    start_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('startTime'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    state: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('state') }})
    training_options: Optional[BqmlTrainingRunTrainingOptions] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('trainingOptions') }})
    
