from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import grantstatus_enum
from . import allowedoperation_enum


@dataclass_json
@dataclass
class Grant:
    grant_arn: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'GrantArn' }})
    grant_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'GrantName' }})
    grant_status: grantstatus_enum.GrantStatusEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'GrantStatus' }})
    granted_operations: List[allowedoperation_enum.AllowedOperationEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'GrantedOperations' }})
    grantee_principal_arn: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'GranteePrincipalArn' }})
    home_region: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'HomeRegion' }})
    license_arn: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LicenseArn' }})
    parent_arn: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ParentArn' }})
    status_reason: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'StatusReason' }})
    version: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Version' }})
    
