from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetContactsQueryParams:
    ending_before: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'ending_before', 'style': 'form', 'explode': True }})
    limit: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    starting_after: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'starting_after', 'style': 'form', 'explode': True }})
    

@dataclass
class GetContactsRequest:
    query_params: GetContactsQueryParams = field()
    

@dataclass
class GetContactsResponse:
    content_type: str = field()
    status_code: int = field()
    student_contacts_response: Optional[shared.StudentContactsResponse] = field(default=None)
    
