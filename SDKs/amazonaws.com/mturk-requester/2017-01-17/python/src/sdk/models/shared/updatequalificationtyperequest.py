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
class UpdateQualificationTypeRequest:
    qualification_type_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('QualificationTypeId') }})
    answer_key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AnswerKey') }})
    auto_granted: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AutoGranted') }})
    auto_granted_value: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AutoGrantedValue') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Description') }})
    qualification_type_status: Optional[QualificationTypeStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('QualificationTypeStatus') }})
    retry_delay_in_seconds: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RetryDelayInSeconds') }})
    test: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Test') }})
    test_duration_in_seconds: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TestDurationInSeconds') }})
    
