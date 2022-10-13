from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import replicationrunstagedetails
from . import replicationrunstate_enum
from . import replicationruntype_enum


@dataclass_json
@dataclass
class ReplicationRun:
    ami_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'amiId' }})
    completed_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'completedTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    encrypted: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'encrypted' }})
    kms_key_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'kmsKeyId' }})
    replication_run_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'replicationRunId' }})
    scheduled_start_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'scheduledStartTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    stage_details: Optional[replicationrunstagedetails.ReplicationRunStageDetails] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'stageDetails' }})
    state: Optional[replicationrunstate_enum.ReplicationRunStateEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'state' }})
    status_message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'statusMessage' }})
    type: Optional[replicationruntype_enum.ReplicationRunTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    
