from dataclasses import dataclass, field
from typing import List,Optional


@dataclass
class GetSearchV1FieldsQueryParams:
    callback: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'callback', 'style': 'form', 'explode': True }})
    

@dataclass
class GetSearchV1FieldsRequest:
    query_params: GetSearchV1FieldsQueryParams = field()
    

@dataclass
class GetSearchV1FieldsResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    fields: Optional[List[str]] = field(default=None)
    
