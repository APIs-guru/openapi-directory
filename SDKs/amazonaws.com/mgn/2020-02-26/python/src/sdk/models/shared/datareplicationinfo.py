from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class DataReplicationInfo:
    r"""DataReplicationInfo
    Request data replication info.
    """
    
    data_replication_error: Optional[DataReplicationError] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dataReplicationError') }})
    data_replication_initiation: Optional[DataReplicationInitiation] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dataReplicationInitiation') }})
    data_replication_state: Optional[DataReplicationStateEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dataReplicationState') }})
    eta_date_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('etaDateTime') }})
    lag_duration: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lagDuration') }})
    replicated_disks: Optional[List[DataReplicationInfoReplicatedDisk]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('replicatedDisks') }})
    
