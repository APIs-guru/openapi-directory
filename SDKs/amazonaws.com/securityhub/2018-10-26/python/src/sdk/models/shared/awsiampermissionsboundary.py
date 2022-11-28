from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class AwsIamPermissionsBoundary:
    r"""AwsIamPermissionsBoundary
    Information about the policy used to set the permissions boundary for an IAM principal.
    """
    
    permissions_boundary_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PermissionsBoundaryArn') }})
    permissions_boundary_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PermissionsBoundaryType') }})
    
