from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import licenseoperationfailure


@dataclass_json
@dataclass
class ListFailuresForLicenseConfigurationOperationsResponse:
    license_operation_failure_list: Optional[List[licenseoperationfailure.LicenseOperationFailure]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LicenseOperationFailureList' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextToken' }})
    
