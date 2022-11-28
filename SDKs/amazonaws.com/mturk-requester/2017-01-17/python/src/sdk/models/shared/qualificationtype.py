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
class QualificationType:
    r"""QualificationType
     The QualificationType data structure represents a Qualification type, a description of a property of a Worker that must match the requirements of a HIT for the Worker to be able to accept the HIT. The type also describes how a Worker can obtain a Qualification of that type, such as through a Qualification test. 
    """
    
    answer_key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AnswerKey') }})
    auto_granted: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AutoGranted') }})
    auto_granted_value: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AutoGrantedValue') }})
    creation_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CreationTime'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Description') }})
    is_requestable: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('IsRequestable') }})
    keywords: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Keywords') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Name') }})
    qualification_type_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('QualificationTypeId') }})
    qualification_type_status: Optional[QualificationTypeStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('QualificationTypeStatus') }})
    retry_delay_in_seconds: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RetryDelayInSeconds') }})
    test: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Test') }})
    test_duration_in_seconds: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TestDurationInSeconds') }})
    
