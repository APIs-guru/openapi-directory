from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class PostProjectsRequestBody:
    global_access: str = field(default=None, metadata={'multipart_form': { 'field_name': 'global_access' }})
    

@dataclass
class PostProjectsRequest:
    request: PostProjectsRequestBody = field(default=None, metadata={'request': { 'media_type': 'multipart/form-data' }})
    

@dataclass
class PostProjectsResponse:
    content_type: str = field(default=None)
    project_entity: Optional[shared.ProjectEntity] = field(default=None)
    status_code: int = field(default=None)
    
