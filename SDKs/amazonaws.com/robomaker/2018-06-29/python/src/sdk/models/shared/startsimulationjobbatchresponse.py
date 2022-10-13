from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import batchpolicy
from . import simulationjobsummary
from . import failedcreatesimulationjobrequest
from . import simulationjobbatcherrorcode_enum
from . import simulationjobrequest
from . import simulationjobbatchstatus_enum


@dataclass_json
@dataclass
class StartSimulationJobBatchResponse:
    arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'arn' }})
    batch_policy: Optional[batchpolicy.BatchPolicy] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'batchPolicy' }})
    client_request_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'clientRequestToken' }})
    created_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'createdAt', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    created_requests: Optional[List[simulationjobsummary.SimulationJobSummary]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'createdRequests' }})
    failed_requests: Optional[List[failedcreatesimulationjobrequest.FailedCreateSimulationJobRequest]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'failedRequests' }})
    failure_code: Optional[simulationjobbatcherrorcode_enum.SimulationJobBatchErrorCodeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'failureCode' }})
    failure_reason: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'failureReason' }})
    pending_requests: Optional[List[simulationjobrequest.SimulationJobRequest]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pendingRequests' }})
    status: Optional[simulationjobbatchstatus_enum.SimulationJobBatchStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    tags: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tags' }})
    
