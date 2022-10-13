from dataclasses import dataclass, field
from typing import List,Optional


@dataclass
class GetSearchV1FieldsQueryParams:
    callback: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'callback', 'style': 'form', 'explode': True }})
    

@dataclass
class GetSearchV1FieldsRequest:
    query_params: GetSearchV1FieldsQueryParams = field(default=None)
    

@dataclass
class GetSearchV1FieldsResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    fields: Optional[List[str]] = field(default=None)
    status_code: int = field(default=None)
    
