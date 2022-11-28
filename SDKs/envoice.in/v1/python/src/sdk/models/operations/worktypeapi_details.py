from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class WorkTypeAPIDetailsQueryParams:
    work_type_id: int = field(metadata={'query_param': { 'field_name': 'workTypeId', 'style': 'form', 'explode': True }})
    

@dataclass
class WorkTypeAPIDetailsHeaders:
    x_auth_key: str = field(metadata={'header': { 'field_name': 'x-auth-key', 'style': 'simple', 'explode': False }})
    x_auth_secret: str = field(metadata={'header': { 'field_name': 'x-auth-secret', 'style': 'simple', 'explode': False }})
    

@dataclass
class WorkTypeAPIDetailsRequest:
    headers: WorkTypeAPIDetailsHeaders = field()
    query_params: WorkTypeAPIDetailsQueryParams = field()
    

@dataclass
class WorkTypeAPIDetailsResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    work_type_details_api_model: Optional[shared.WorkTypeDetailsAPIModel] = field(default=None)
    
