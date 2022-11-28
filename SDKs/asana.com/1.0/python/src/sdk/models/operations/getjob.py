from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class GetJobPathParams:
    job_gid: str = field(metadata={'path_param': { 'field_name': 'job_gid', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetJobQueryParams:
    opt_fields: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'opt_fields', 'style': 'form', 'explode': False }})
    opt_pretty: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'opt_pretty', 'style': 'form', 'explode': True }})
    

@dataclass_json
@dataclass
class GetJob200ApplicationJSON:
    data: Optional[shared.JobResponse] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    

@dataclass
class GetJobRequest:
    path_params: GetJobPathParams = field()
    query_params: GetJobQueryParams = field()
    

@dataclass
class GetJobResponse:
    content_type: str = field()
    status_code: int = field()
    error_response: Optional[shared.ErrorResponse] = field(default=None)
    get_job_200_application_json_object: Optional[GetJob200ApplicationJSON] = field(default=None)
    
