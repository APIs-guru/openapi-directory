from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json

class GoogleCloudAssuredworkloadsV1WorkloadSaaEnrollmentResponseSetupErrorsEnum(str, Enum):
    SETUP_ERROR_UNSPECIFIED = "SETUP_ERROR_UNSPECIFIED"
    ERROR_INVALID_BASE_SETUP = "ERROR_INVALID_BASE_SETUP"
    ERROR_MISSING_EXTERNAL_SIGNING_KEY = "ERROR_MISSING_EXTERNAL_SIGNING_KEY"
    ERROR_NOT_ALL_SERVICES_ENROLLED = "ERROR_NOT_ALL_SERVICES_ENROLLED"
    ERROR_SETUP_CHECK_FAILED = "ERROR_SETUP_CHECK_FAILED"

class GoogleCloudAssuredworkloadsV1WorkloadSaaEnrollmentResponseSetupStatusEnum(str, Enum):
    SETUP_STATE_UNSPECIFIED = "SETUP_STATE_UNSPECIFIED"
    STATUS_PENDING = "STATUS_PENDING"
    STATUS_COMPLETE = "STATUS_COMPLETE"


@dataclass_json
@dataclass
class GoogleCloudAssuredworkloadsV1WorkloadSaaEnrollmentResponse:
    setup_errors: Optional[List[GoogleCloudAssuredworkloadsV1WorkloadSaaEnrollmentResponseSetupErrorsEnum]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'setupErrors' }})
    setup_status: Optional[GoogleCloudAssuredworkloadsV1WorkloadSaaEnrollmentResponseSetupStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'setupStatus' }})
    
