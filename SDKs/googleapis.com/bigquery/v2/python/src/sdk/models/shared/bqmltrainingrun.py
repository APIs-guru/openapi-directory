from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import bqmliterationresult


@dataclass_json
@dataclass
class BqmlTrainingRunTrainingOptions:
    early_stop: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'earlyStop' }})
    l1_reg: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'l1Reg' }})
    l2_reg: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'l2Reg' }})
    learn_rate: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'learnRate' }})
    learn_rate_strategy: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'learnRateStrategy' }})
    line_search_init_learn_rate: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lineSearchInitLearnRate' }})
    max_iteration: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'maxIteration' }})
    min_rel_progress: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'minRelProgress' }})
    warm_start: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'warmStart' }})
    

@dataclass_json
@dataclass
class BqmlTrainingRun:
    iteration_results: Optional[List[bqmliterationresult.BqmlIterationResult]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'iterationResults' }})
    start_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'startTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    state: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'state' }})
    training_options: Optional[BqmlTrainingRunTrainingOptions] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'trainingOptions' }})
    
