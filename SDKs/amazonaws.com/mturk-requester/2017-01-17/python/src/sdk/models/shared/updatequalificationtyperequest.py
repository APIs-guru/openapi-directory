from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import qualificationtypestatus_enum


@dataclass_json
@dataclass
class UpdateQualificationTypeRequest:
    answer_key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AnswerKey' }})
    auto_granted: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AutoGranted' }})
    auto_granted_value: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AutoGrantedValue' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Description' }})
    qualification_type_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'QualificationTypeId' }})
    qualification_type_status: Optional[qualificationtypestatus_enum.QualificationTypeStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'QualificationTypeStatus' }})
    retry_delay_in_seconds: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RetryDelayInSeconds' }})
    test: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Test' }})
    test_duration_in_seconds: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TestDurationInSeconds' }})
    
