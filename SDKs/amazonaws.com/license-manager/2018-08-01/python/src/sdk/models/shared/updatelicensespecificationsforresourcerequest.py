from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import licensespecification
from . import licensespecification


@dataclass_json
@dataclass
class UpdateLicenseSpecificationsForResourceRequest:
    add_license_specifications: Optional[List[licensespecification.LicenseSpecification]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AddLicenseSpecifications' }})
    remove_license_specifications: Optional[List[licensespecification.LicenseSpecification]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RemoveLicenseSpecifications' }})
    resource_arn: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ResourceArn' }})
    
