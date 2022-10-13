from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class GetSearchV1OrganicQueryParams:
    callback: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'callback', 'style': 'form', 'explode': True }})
    field: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'field', 'style': 'form', 'explode': True }})
    q: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'q', 'style': 'form', 'explode': True }})
    size: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'size', 'style': 'form', 'explode': True }})
    total_only: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'total_only', 'style': 'form', 'explode': True }})
    

@dataclass
class GetSearchV1OrganicRequest:
    query_params: GetSearchV1OrganicQueryParams = field(default=None)
    

@dataclass
class GetSearchV1OrganicResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    error: Optional[Any] = field(default=None)
    organic_result: Optional[shared.OrganicResult] = field(default=None)
    status_code: int = field(default=None)
    
