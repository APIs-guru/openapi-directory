from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import qualificationtypestatus_enum


@dataclass_json
@dataclass
class QualificationType:
    answer_key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AnswerKey' }})
    auto_granted: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AutoGranted' }})
    auto_granted_value: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AutoGrantedValue' }})
    creation_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CreationTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Description' }})
    is_requestable: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'IsRequestable' }})
    keywords: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Keywords' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Name' }})
    qualification_type_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'QualificationTypeId' }})
    qualification_type_status: Optional[qualificationtypestatus_enum.QualificationTypeStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'QualificationTypeStatus' }})
    retry_delay_in_seconds: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RetryDelayInSeconds' }})
    test: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Test' }})
    test_duration_in_seconds: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TestDurationInSeconds' }})
    
