from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class LicenseSpecification:
    ami_association_scope: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AmiAssociationScope' }})
    license_configuration_arn: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LicenseConfigurationArn' }})
    
