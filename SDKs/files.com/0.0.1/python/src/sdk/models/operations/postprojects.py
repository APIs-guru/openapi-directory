from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class PostProjectsRequestBody:
    global_access: str = field(metadata={'multipart_form': { 'field_name': 'global_access' }})
    

@dataclass
class PostProjectsRequest:
    request: PostProjectsRequestBody = field(metadata={'request': { 'media_type': 'multipart/form-data' }})
    

@dataclass
class PostProjectsResponse:
    content_type: str = field()
    status_code: int = field()
    project_entity: Optional[shared.ProjectEntity] = field(default=None)
    
