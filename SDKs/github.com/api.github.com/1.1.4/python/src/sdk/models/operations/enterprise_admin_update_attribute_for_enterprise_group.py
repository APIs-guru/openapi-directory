from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class EnterpriseAdminUpdateAttributeForEnterpriseGroupPathParams:
    enterprise: str = field(metadata={'path_param': { 'field_name': 'enterprise', 'style': 'simple', 'explode': False }})
    scim_group_id: str = field(metadata={'path_param': { 'field_name': 'scim_group_id', 'style': 'simple', 'explode': False }})
    
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
    op: EnterpriseAdminUpdateAttributeForEnterpriseGroupRequestBodyOperationsOpEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('op') }})
    path: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('path') }})
    value: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('value') }})
    

@dataclass_json
@dataclass
class EnterpriseAdminUpdateAttributeForEnterpriseGroupRequestBody:
    operations: List[EnterpriseAdminUpdateAttributeForEnterpriseGroupRequestBodyOperations] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Operations') }})
    schemas: List[str] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('schemas') }})
    

@dataclass
class EnterpriseAdminUpdateAttributeForEnterpriseGroupRequest:
    path_params: EnterpriseAdminUpdateAttributeForEnterpriseGroupPathParams = field()
    request: Optional[EnterpriseAdminUpdateAttributeForEnterpriseGroupRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class EnterpriseAdminUpdateAttributeForEnterpriseGroupResponse:
    content_type: str = field()
    status_code: int = field()
    scim_enterprise_group: Optional[shared.ScimEnterpriseGroup] = field(default=None)
    
