from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import simulationjoberrorcode_enum
from . import simulationjobrequest


@dataclass_json
@dataclass
class FailedCreateSimulationJobRequest:
    failed_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'failedAt', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    failure_code: Optional[simulationjoberrorcode_enum.SimulationJobErrorCodeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'failureCode' }})
    failure_reason: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'failureReason' }})
    request: Optional[simulationjobrequest.SimulationJobRequest] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'request' }})
    
