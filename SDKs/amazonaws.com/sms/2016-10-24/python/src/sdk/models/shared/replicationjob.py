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
class ReplicationJob:
    r"""ReplicationJob
    Represents a replication job.
    """
    
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    encrypted: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('encrypted') }})
    frequency: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('frequency') }})
    kms_key_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kmsKeyId') }})
    latest_ami_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('latestAmiId') }})
    license_type: Optional[LicenseTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('licenseType') }})
    next_replication_run_start_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextReplicationRunStartTime'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    number_of_recent_amis_to_keep: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('numberOfRecentAmisToKeep') }})
    replication_job_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('replicationJobId') }})
    replication_run_list: Optional[List[ReplicationRun]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('replicationRunList') }})
    role_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('roleName') }})
    run_once: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('runOnce') }})
    seed_replication_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('seedReplicationTime'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    server_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('serverId') }})
    server_type: Optional[ServerTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('serverType') }})
    state: Optional[ReplicationJobStateEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('state') }})
    status_message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('statusMessage') }})
    vm_server: Optional[VMServer] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('vmServer') }})
    
