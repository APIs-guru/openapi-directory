from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class CreateQualificationTypeRequest:
    description: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Description') }})
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Name') }})
    qualification_type_status: QualificationTypeStatusEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('QualificationTypeStatus') }})
    answer_key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AnswerKey') }})
    auto_granted: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AutoGranted') }})
    auto_granted_value: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AutoGrantedValue') }})
    keywords: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Keywords') }})
    retry_delay_in_seconds: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RetryDelayInSeconds') }})
    test: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Test') }})
    test_duration_in_seconds: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TestDurationInSeconds') }})
    
