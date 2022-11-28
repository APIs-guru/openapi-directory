from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class EnrolledServiceEnrollmentLevelEnum(str, Enum):
    ENROLLMENT_LEVEL_UNSPECIFIED = "ENROLLMENT_LEVEL_UNSPECIFIED"
    BLOCK_ALL = "BLOCK_ALL"


@dataclass_json
@dataclass
class EnrolledService:
    r"""EnrolledService
    Represents the enrollment of a cloud resource into a specific service.
    """
    
    cloud_product: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cloudProduct') }})
    enrollment_level: Optional[EnrolledServiceEnrollmentLevelEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('enrollmentLevel') }})
    
