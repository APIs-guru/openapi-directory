from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetInboxRegistrationsQueryParams:
    folder_behavior_id: int = field(metadata={'query_param': { 'field_name': 'folder_behavior_id', 'style': 'form', 'explode': True }})
    cursor: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'cursor', 'style': 'form', 'explode': True }})
    per_page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'per_page', 'style': 'form', 'explode': True }})
    

@dataclass
class GetInboxRegistrationsRequest:
    query_params: GetInboxRegistrationsQueryParams = field()
    

@dataclass
class GetInboxRegistrationsResponse:
    content_type: str = field()
    status_code: int = field()
    inbox_registration_entities: Optional[List[shared.InboxRegistrationEntity]] = field(default=None)
    
