from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from sdk.models import shared

class ReposListPublicVisibilityEnum(str, Enum):
    ALL = "all"
    PUBLIC = "public"


@dataclass
class ReposListPublicQueryParams:
    since: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'since', 'style': 'form', 'explode': True }})
    visibility: Optional[ReposListPublicVisibilityEnum] = field(default=None, metadata={'query_param': { 'field_name': 'visibility', 'style': 'form', 'explode': True }})
    

@dataclass
class ReposListPublicRequest:
    query_params: ReposListPublicQueryParams = field()
    

@dataclass
class ReposListPublicResponse:
    content_type: str = field()
    headers: dict[str, List[str]] = field()
    status_code: int = field()
    minimal_repositories: Optional[List[shared.MinimalRepository]] = field(default=None)
    validation_error: Optional[shared.ValidationError] = field(default=None)
    
