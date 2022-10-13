from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class AwsIamPermissionsBoundary:
    permissions_boundary_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PermissionsBoundaryArn' }})
    permissions_boundary_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PermissionsBoundaryType' }})
    
