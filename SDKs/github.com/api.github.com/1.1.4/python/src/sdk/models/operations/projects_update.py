from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class ProjectsUpdatePathParams:
    project_id: int = field(metadata={'path_param': { 'field_name': 'project_id', 'style': 'simple', 'explode': False }})
    
class ProjectsUpdateRequestBodyOrganizationPermissionEnum(str, Enum):
    READ = "read"
    WRITE = "write"
    ADMIN = "admin"
    NONE = "none"


@dataclass_json
@dataclass
class ProjectsUpdateRequestBody:
    body: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('body') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    organization_permission: Optional[ProjectsUpdateRequestBodyOrganizationPermissionEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('organization_permission') }})
    private: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('private') }})
    state: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('state') }})
    

@dataclass_json
@dataclass
class ProjectsUpdate403ApplicationJSON:
    documentation_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('documentation_url') }})
    errors: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('errors') }})
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass
class ProjectsUpdateRequest:
    path_params: ProjectsUpdatePathParams = field()
    request: Optional[ProjectsUpdateRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class ProjectsUpdateResponse:
    content_type: str = field()
    status_code: int = field()
    basic_error: Optional[shared.BasicError] = field(default=None)
    project: Optional[shared.Project] = field(default=None)
    projects_update_403_application_json_object: Optional[ProjectsUpdate403ApplicationJSON] = field(default=None)
    validation_error_simple: Optional[shared.ValidationErrorSimple] = field(default=None)
    
