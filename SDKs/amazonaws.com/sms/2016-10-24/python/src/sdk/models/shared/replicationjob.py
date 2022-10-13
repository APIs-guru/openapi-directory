from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import licensetype_enum
from . import replicationrun
from . import servertype_enum
from . import replicationjobstate_enum
from . import vmserver


@dataclass_json
@dataclass
class ReplicationJob:
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    encrypted: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'encrypted' }})
    frequency: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'frequency' }})
    kms_key_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'kmsKeyId' }})
    latest_ami_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'latestAmiId' }})
    license_type: Optional[licensetype_enum.LicenseTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'licenseType' }})
    next_replication_run_start_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextReplicationRunStartTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    number_of_recent_amis_to_keep: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'numberOfRecentAmisToKeep' }})
    replication_job_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'replicationJobId' }})
    replication_run_list: Optional[List[replicationrun.ReplicationRun]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'replicationRunList' }})
    role_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'roleName' }})
    run_once: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'runOnce' }})
    seed_replication_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'seedReplicationTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    server_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'serverId' }})
    server_type: Optional[servertype_enum.ServerTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'serverType' }})
    state: Optional[replicationjobstate_enum.ReplicationJobStateEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'state' }})
    status_message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'statusMessage' }})
    vm_server: Optional[vmserver.VMServer] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'vmServer' }})
    
