from dataclasses import dataclass, field
from typing import Enum
from dataclasses_json import dataclass_json
from . import s3continuousclassificationtype_enum
from . import s3onetimeclassificationtype_enum


@dataclass_json
@dataclass
class ClassificationType:
    continuous: s3continuousclassificationtype_enum.S3ContinuousClassificationTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'continuous' }})
    one_time: s3onetimeclassificationtype_enum.S3OneTimeClassificationTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'oneTime' }})
    
