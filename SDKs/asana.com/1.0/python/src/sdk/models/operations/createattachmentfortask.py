from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class CreateAttachmentForTaskPathParams:
    task_gid: str = field(metadata={'path_param': { 'field_name': 'task_gid', 'style': 'simple', 'explode': False }})
    

@dataclass
class CreateAttachmentForTaskQueryParams:
    limit: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    offset: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'offset', 'style': 'form', 'explode': True }})
    opt_fields: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'opt_fields', 'style': 'form', 'explode': False }})
    opt_pretty: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'opt_pretty', 'style': 'form', 'explode': True }})
    

@dataclass_json
@dataclass
class CreateAttachmentForTask200ApplicationJSON:
    data: Optional[shared.AttachmentResponse] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    

@dataclass
class CreateAttachmentForTaskRequest:
    path_params: CreateAttachmentForTaskPathParams = field()
    query_params: CreateAttachmentForTaskQueryParams = field()
    request: shared.AttachmentRequest = field(metadata={'request': { 'media_type': 'multipart/form-data' }})
    

@dataclass
class CreateAttachmentForTaskResponse:
    content_type: str = field()
    status_code: int = field()
    error_response: Optional[shared.ErrorResponse] = field(default=None)
    create_attachment_for_task_200_application_json_object: Optional[CreateAttachmentForTask200ApplicationJSON] = field(default=None)
    
