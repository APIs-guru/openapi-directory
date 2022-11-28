from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class QualificationRequest:
    r"""QualificationRequest
     The QualificationRequest data structure represents a request a Worker has made for a Qualification. 
    """
    
    answer: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Answer') }})
    qualification_request_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('QualificationRequestId') }})
    qualification_type_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('QualificationTypeId') }})
    submit_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SubmitTime'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    test: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Test') }})
    worker_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('WorkerId') }})
    
