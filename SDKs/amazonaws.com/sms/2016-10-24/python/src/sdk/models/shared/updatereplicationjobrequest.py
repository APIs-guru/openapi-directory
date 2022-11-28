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
class UpdateReplicationJobRequest:
    replication_job_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('replicationJobId') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    encrypted: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('encrypted') }})
    frequency: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('frequency') }})
    kms_key_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kmsKeyId') }})
    license_type: Optional[LicenseTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('licenseType') }})
    next_replication_run_start_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextReplicationRunStartTime'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    number_of_recent_amis_to_keep: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('numberOfRecentAmisToKeep') }})
    role_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('roleName') }})
    
