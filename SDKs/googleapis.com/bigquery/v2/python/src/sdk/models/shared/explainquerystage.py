from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ExplainQueryStage:
    completed_parallel_inputs: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('completedParallelInputs') }})
    compute_ms_avg: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('computeMsAvg') }})
    compute_ms_max: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('computeMsMax') }})
    compute_ratio_avg: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('computeRatioAvg') }})
    compute_ratio_max: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('computeRatioMax') }})
    end_ms: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('endMs') }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    input_stages: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('inputStages') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    parallel_inputs: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('parallelInputs') }})
    read_ms_avg: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('readMsAvg') }})
    read_ms_max: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('readMsMax') }})
    read_ratio_avg: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('readRatioAvg') }})
    read_ratio_max: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('readRatioMax') }})
    records_read: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('recordsRead') }})
    records_written: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('recordsWritten') }})
    shuffle_output_bytes: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('shuffleOutputBytes') }})
    shuffle_output_bytes_spilled: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('shuffleOutputBytesSpilled') }})
    slot_ms: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('slotMs') }})
    start_ms: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('startMs') }})
    status: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    steps: Optional[List[ExplainQueryStep]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('steps') }})
    wait_ms_avg: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('waitMsAvg') }})
    wait_ms_max: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('waitMsMax') }})
    wait_ratio_avg: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('waitRatioAvg') }})
    wait_ratio_max: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('waitRatioMax') }})
    write_ms_avg: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('writeMsAvg') }})
    write_ms_max: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('writeMsMax') }})
    write_ratio_avg: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('writeRatioAvg') }})
    write_ratio_max: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('writeRatioMax') }})
    
