from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class EnterpriseAdminUpdateAttributeForEnterpriseUserPathParams:
    enterprise: str = field(metadata={'path_param': { 'field_name': 'enterprise', 'style': 'simple', 'explode': False }})
    scim_user_id: str = field(metadata={'path_param': { 'field_name': 'scim_user_id', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class EnterpriseAdminUpdateAttributeForEnterpriseUserRequestBody:
    operations: List[dict[str, Any]] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Operations') }})
    schemas: List[str] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('schemas') }})
    

@dataclass
class EnterpriseAdminUpdateAttributeForEnterpriseUserRequest:
    path_params: EnterpriseAdminUpdateAttributeForEnterpriseUserPathParams = field()
    request: Optional[EnterpriseAdminUpdateAttributeForEnterpriseUserRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class EnterpriseAdminUpdateAttributeForEnterpriseUserResponse:
    content_type: str = field()
    status_code: int = field()
    scim_enterprise_user: Optional[shared.ScimEnterpriseUser] = field(default=None)
    
