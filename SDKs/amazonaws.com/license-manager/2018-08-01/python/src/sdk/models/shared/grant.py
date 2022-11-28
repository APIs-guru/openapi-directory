from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class Grant:
    r"""Grant
    Describes a grant.
    """
    
    grant_arn: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('GrantArn') }})
    grant_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('GrantName') }})
    grant_status: GrantStatusEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('GrantStatus') }})
    granted_operations: List[AllowedOperationEnum] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('GrantedOperations') }})
    grantee_principal_arn: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('GranteePrincipalArn') }})
    home_region: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('HomeRegion') }})
    license_arn: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('LicenseArn') }})
    parent_arn: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ParentArn') }})
    version: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Version') }})
    status_reason: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('StatusReason') }})
    
