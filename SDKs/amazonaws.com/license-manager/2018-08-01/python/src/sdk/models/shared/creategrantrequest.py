from dataclasses import dataclass, field
from typing import Enum,List
from dataclasses_json import dataclass_json
from . import allowedoperation_enum


@dataclass_json
@dataclass
class CreateGrantRequest:
    allowed_operations: List[allowedoperation_enum.AllowedOperationEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AllowedOperations' }})
    client_token: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ClientToken' }})
    grant_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'GrantName' }})
    home_region: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'HomeRegion' }})
    license_arn: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LicenseArn' }})
    principals: List[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Principals' }})
    
