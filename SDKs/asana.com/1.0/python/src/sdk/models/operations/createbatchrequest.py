from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class CreateBatchRequestQueryParams:
    opt_fields: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'opt_fields', 'style': 'form', 'explode': False }})
    opt_pretty: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'opt_pretty', 'style': 'form', 'explode': True }})
    

@dataclass_json
@dataclass
class CreateBatchRequestRequestBody:
    data: Optional[shared.BatchRequest] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    

@dataclass_json
@dataclass
class CreateBatchRequest200ApplicationJSON:
    data: Optional[List[shared.BatchResponse]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    

@dataclass
class CreateBatchRequestRequest:
    query_params: CreateBatchRequestQueryParams = field()
    request: CreateBatchRequestRequestBody = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class CreateBatchRequestResponse:
    content_type: str = field()
    status_code: int = field()
    error_response: Optional[shared.ErrorResponse] = field(default=None)
    create_batch_request_200_application_json_object: Optional[CreateBatchRequest200ApplicationJSON] = field(default=None)
    
