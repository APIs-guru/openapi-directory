from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetNamesCandidatesQueryParams:
    api_key: str = field(metadata={'query_param': { 'field_name': 'api_key', 'style': 'form', 'explode': True }})
    q: List[str] = field(metadata={'query_param': { 'field_name': 'q', 'style': 'form', 'explode': True }})
    

@dataclass
class GetNamesCandidatesRequest:
    query_params: GetNamesCandidatesQueryParams = field()
    

@dataclass
class GetNamesCandidatesResponse:
    content_type: str = field()
    status_code: int = field()
    candidate_search_list: Optional[shared.CandidateSearchList] = field(default=None)
    
