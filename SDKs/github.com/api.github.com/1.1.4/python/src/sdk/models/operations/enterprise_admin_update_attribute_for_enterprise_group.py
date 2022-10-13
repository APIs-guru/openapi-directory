from dataclasses import dataclass, field
from typing import Any,Enum,List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class EnterpriseAdminUpdateAttributeForEnterpriseGroupPathParams:
    enterprise: str = field(default=None, metadata={'path_param': { 'field_name': 'enterprise', 'style': 'simple', 'explode': False }})
    scim_group_id: str = field(default=None, metadata={'path_param': { 'field_name': 'scim_group_id', 'style': 'simple', 'explode': False }})
    
class EnterpriseAdminUpdateAttributeForEnterpriseGroupRequestBodyOperationsOpEnum(str, Enum):
    ADD_LOWER = "add"
    ADD_MIXED = "Add"
    REMOVE_LOWER = "remove"
    REMOVE_MIXED = "Remove"
    REPLACE_LOWER = "replace"
    REPLACE_MIXED = "Replace"


@dataclass_json
@dataclass
class EnterpriseAdminUpdateAttributeForEnterpriseGroupRequestBodyOperations:
    op: EnterpriseAdminUpdateAttributeForEnterpriseGroupRequestBodyOperationsOpEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'op' }})
    path: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'path' }})
    value: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'value' }})
    

@dataclass_json
@dataclass
class EnterpriseAdminUpdateAttributeForEnterpriseGroupRequestBody:
    operations: List[EnterpriseAdminUpdateAttributeForEnterpriseGroupRequestBodyOperations] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Operations' }})
    schemas: List[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'schemas' }})
    

@dataclass
class EnterpriseAdminUpdateAttributeForEnterpriseGroupRequest:
    path_params: EnterpriseAdminUpdateAttributeForEnterpriseGroupPathParams = field(default=None)
    request: Optional[EnterpriseAdminUpdateAttributeForEnterpriseGroupRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class EnterpriseAdminUpdateAttributeForEnterpriseGroupResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    scim_enterprise_group: Optional[shared.ScimEnterpriseGroup] = field(default=None)
    
