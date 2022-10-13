from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class ReposCreateForkPathParams:
    owner: str = field(default=None, metadata={'path_param': { 'field_name': 'owner', 'style': 'simple', 'explode': False }})
    repo: str = field(default=None, metadata={'path_param': { 'field_name': 'repo', 'style': 'simple', 'explode': False }})
    

@dataclass
class ReposCreateForkQueryParams:
    org: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'org', 'style': 'form', 'explode': True }})
    organization: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'organization', 'style': 'form', 'explode': True }})
    

@dataclass_json
@dataclass
class ReposCreateForkRequestBody:
    organization: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'organization' }})
    

@dataclass
class ReposCreateForkRequest:
    path_params: ReposCreateForkPathParams = field(default=None)
    query_params: ReposCreateForkQueryParams = field(default=None)
    request: Optional[ReposCreateForkRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class ReposCreateForkResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    basic_error: Optional[shared.BasicError] = field(default=None)
    repository: Optional[shared.Repository] = field(default=None)
    scim_error: Optional[shared.ScimError] = field(default=None)
    validation_error: Optional[shared.ValidationError] = field(default=None)
    
