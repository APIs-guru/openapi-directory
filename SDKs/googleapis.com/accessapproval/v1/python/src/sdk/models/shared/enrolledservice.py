from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class EnrolledServiceEnrollmentLevelEnum(str, Enum):
    ENROLLMENT_LEVEL_UNSPECIFIED = "ENROLLMENT_LEVEL_UNSPECIFIED"
    BLOCK_ALL = "BLOCK_ALL"


@dataclass_json
@dataclass
class EnrolledService:
    cloud_product: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cloudProduct' }})
    enrollment_level: Optional[EnrolledServiceEnrollmentLevelEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'enrollmentLevel' }})
    
