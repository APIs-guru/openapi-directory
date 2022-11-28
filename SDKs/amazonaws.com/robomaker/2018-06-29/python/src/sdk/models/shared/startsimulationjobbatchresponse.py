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
class StartSimulationJobBatchResponse:
    arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('arn') }})
    batch_policy: Optional[BatchPolicy] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('batchPolicy') }})
    client_request_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('clientRequestToken') }})
    created_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('createdAt'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    created_requests: Optional[List[SimulationJobSummary]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('createdRequests') }})
    failed_requests: Optional[List[FailedCreateSimulationJobRequest]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('failedRequests') }})
    failure_code: Optional[SimulationJobBatchErrorCodeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('failureCode') }})
    failure_reason: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('failureReason') }})
    pending_requests: Optional[List[SimulationJobRequest]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pendingRequests') }})
    status: Optional[SimulationJobBatchStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    tags: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tags') }})
    
