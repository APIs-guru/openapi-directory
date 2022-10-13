from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class WorkTypeAPIDetailsQueryParams:
    work_type_id: int = field(default=None, metadata={'query_param': { 'field_name': 'workTypeId', 'style': 'form', 'explode': True }})
    

@dataclass
class WorkTypeAPIDetailsHeaders:
    x_auth_key: str = field(default=None, metadata={'header': { 'field_name': 'x-auth-key' }})
    x_auth_secret: str = field(default=None, metadata={'header': { 'field_name': 'x-auth-secret' }})
    

@dataclass
class WorkTypeAPIDetailsRequest:
    query_params: WorkTypeAPIDetailsQueryParams = field(default=None)
    headers: WorkTypeAPIDetailsHeaders = field(default=None)
    

@dataclass
class WorkTypeAPIDetailsResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    work_type_details_api_model: Optional[shared.WorkTypeDetailsAPIModel] = field(default=None)
    
