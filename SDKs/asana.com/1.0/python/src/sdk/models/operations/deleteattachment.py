from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class DeleteAttachmentPathParams:
    attachment_gid: str = field(metadata={'path_param': { 'field_name': 'attachment_gid', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteAttachmentQueryParams:
    opt_fields: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'opt_fields', 'style': 'form', 'explode': False }})
    opt_pretty: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'opt_pretty', 'style': 'form', 'explode': True }})
    

@dataclass_json
@dataclass
class DeleteAttachment200ApplicationJSON:
    data: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    

@dataclass
class DeleteAttachmentRequest:
    path_params: DeleteAttachmentPathParams = field()
    query_params: DeleteAttachmentQueryParams = field()
    

@dataclass
class DeleteAttachmentResponse:
    content_type: str = field()
    status_code: int = field()
    error_response: Optional[shared.ErrorResponse] = field(default=None)
    delete_attachment_200_application_json_object: Optional[DeleteAttachment200ApplicationJSON] = field(default=None)
    
