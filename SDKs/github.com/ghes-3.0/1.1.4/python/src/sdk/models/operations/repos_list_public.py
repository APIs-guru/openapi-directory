from dataclasses import dataclass, field
from typing import Enum,List,Optional
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
    query_params: ReposListPublicQueryParams = field(default=None)
    

@dataclass
class ReposListPublicResponse:
    content_type: str = field(default=None)
    headers: dict[str, List[str]] = field(default=None)
    status_code: int = field(default=None)
    minimal_repositories: Optional[List[shared.MinimalRepository]] = field(default=None)
    validation_error: Optional[shared.ValidationError] = field(default=None)
    
