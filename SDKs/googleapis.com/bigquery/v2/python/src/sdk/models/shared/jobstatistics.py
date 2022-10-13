from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import jobstatistics5
from . import datamaskingstatistics
from . import jobstatistics4
from . import jobstatistics3
from . import jobstatistics2
from . import rowlevelsecuritystatistics
from . import scriptstatistics
from . import sessioninfo
from . import transactioninfo


@dataclass_json
@dataclass
class JobStatisticsReservationUsage:
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    slot_ms: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'slotMs' }})
    

@dataclass_json
@dataclass
class JobStatistics:
    completion_ratio: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'completionRatio' }})
    copy: Optional[jobstatistics5.JobStatistics5] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'copy' }})
    creation_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'creationTime' }})
    data_masking_statistics: Optional[datamaskingstatistics.DataMaskingStatistics] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dataMaskingStatistics' }})
    end_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'endTime' }})
    extract: Optional[jobstatistics4.JobStatistics4] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'extract' }})
    load: Optional[jobstatistics3.JobStatistics3] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'load' }})
    num_child_jobs: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'numChildJobs' }})
    parent_job_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'parentJobId' }})
    query: Optional[jobstatistics2.JobStatistics2] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'query' }})
    quota_deferments: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'quotaDeferments' }})
    reservation_usage: Optional[List[JobStatisticsReservationUsage]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'reservationUsage' }})
    reservation_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'reservation_id' }})
    row_level_security_statistics: Optional[rowlevelsecuritystatistics.RowLevelSecurityStatistics] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'rowLevelSecurityStatistics' }})
    script_statistics: Optional[scriptstatistics.ScriptStatistics] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'scriptStatistics' }})
    session_info: Optional[sessioninfo.SessionInfo] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sessionInfo' }})
    start_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'startTime' }})
    total_bytes_processed: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'totalBytesProcessed' }})
    total_slot_ms: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'totalSlotMs' }})
    transaction_info: Optional[transactioninfo.TransactionInfo] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'transactionInfo' }})
    
