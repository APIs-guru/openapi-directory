from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import licensespecification


@dataclass_json
@dataclass
class ListLicenseSpecificationsForResourceResponse:
    license_specifications: Optional[List[licensespecification.LicenseSpecification]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LicenseSpecifications' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextToken' }})
    
