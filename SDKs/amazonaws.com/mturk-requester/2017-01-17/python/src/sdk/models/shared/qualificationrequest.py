from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class QualificationRequest:
    answer: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Answer' }})
    qualification_request_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'QualificationRequestId' }})
    qualification_type_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'QualificationTypeId' }})
    submit_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SubmitTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    test: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Test' }})
    worker_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'WorkerId' }})
    
