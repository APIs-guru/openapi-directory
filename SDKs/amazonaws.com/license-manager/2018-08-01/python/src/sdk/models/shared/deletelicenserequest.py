from dataclasses import dataclass, field
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class DeleteLicenseRequest:
    license_arn: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LicenseArn' }})
    source_version: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SourceVersion' }})
    
