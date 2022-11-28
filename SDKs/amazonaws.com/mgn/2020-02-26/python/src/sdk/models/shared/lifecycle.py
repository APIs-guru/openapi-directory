from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class LifeCycle:
    r"""LifeCycle
    Lifecycle.
    """
    
    added_to_service_date_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('addedToServiceDateTime') }})
    elapsed_replication_duration: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('elapsedReplicationDuration') }})
    first_byte_date_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('firstByteDateTime') }})
    last_cutover: Optional[LifeCycleLastCutover] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lastCutover') }})
    last_seen_by_service_date_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lastSeenByServiceDateTime') }})
    last_test: Optional[LifeCycleLastTest] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lastTest') }})
    state: Optional[LifeCycleStateEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('state') }})
    
