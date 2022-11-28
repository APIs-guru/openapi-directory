from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class UpdateWorkspacePathParams:
    workspace_gid: str = field(metadata={'path_param': { 'field_name': 'workspace_gid', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateWorkspaceQueryParams:
    opt_fields: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'opt_fields', 'style': 'form', 'explode': False }})
    opt_pretty: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'opt_pretty', 'style': 'form', 'explode': True }})
    

@dataclass_json
@dataclass
class UpdateWorkspaceRequestBodyInput:
    data: Optional[shared.WorkspaceRequestInput] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    

@dataclass_json
@dataclass
class UpdateWorkspace200ApplicationJSON:
    data: Optional[shared.WorkspaceResponse] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    

@dataclass
class UpdateWorkspaceRequest:
    path_params: UpdateWorkspacePathParams = field()
    query_params: UpdateWorkspaceQueryParams = field()
    request: UpdateWorkspaceRequestBodyInput = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class UpdateWorkspaceResponse:
    content_type: str = field()
    status_code: int = field()
    error_response: Optional[shared.ErrorResponse] = field(default=None)
    update_workspace_200_application_json_object: Optional[UpdateWorkspace200ApplicationJSON] = field(default=None)
    
