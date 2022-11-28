from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class JobStatisticsReservationUsage:
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    slot_ms: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('slotMs') }})
    

@dataclass_json
@dataclass
class JobStatistics:
    completion_ratio: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('completionRatio') }})
    copy: Optional[JobStatistics5] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('copy') }})
    creation_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('creationTime') }})
    data_masking_statistics: Optional[DataMaskingStatistics] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dataMaskingStatistics') }})
    end_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('endTime') }})
    extract: Optional[JobStatistics4] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('extract') }})
    load: Optional[JobStatistics3] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('load') }})
    num_child_jobs: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('numChildJobs') }})
    parent_job_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('parentJobId') }})
    query: Optional[JobStatistics2] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('query') }})
    quota_deferments: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('quotaDeferments') }})
    reservation_usage: Optional[List[JobStatisticsReservationUsage]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('reservationUsage') }})
    reservation_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('reservation_id') }})
    row_level_security_statistics: Optional[RowLevelSecurityStatistics] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rowLevelSecurityStatistics') }})
    script_statistics: Optional[ScriptStatistics] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('scriptStatistics') }})
    session_info: Optional[SessionInfo] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sessionInfo') }})
    start_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('startTime') }})
    total_bytes_processed: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('totalBytesProcessed') }})
    total_slot_ms: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('totalSlotMs') }})
    transaction_info: Optional[TransactionInfo] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('transactionInfo') }})
    
