from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetFormFieldSetsQueryParams:
    cursor: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'cursor', 'style': 'form', 'explode': True }})
    per_page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'per_page', 'style': 'form', 'explode': True }})
    user_id: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'user_id', 'style': 'form', 'explode': True }})
    

@dataclass
class GetFormFieldSetsRequest:
    query_params: GetFormFieldSetsQueryParams = field()
    

@dataclass
class GetFormFieldSetsResponse:
    content_type: str = field()
    status_code: int = field()
    form_field_set_entities: Optional[List[shared.FormFieldSetEntity]] = field(default=None)
    
