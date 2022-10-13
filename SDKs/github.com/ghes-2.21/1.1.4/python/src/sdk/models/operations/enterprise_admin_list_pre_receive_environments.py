from dataclasses import dataclass, field
from typing import Enum,List,Optional
from sdk.models import shared

class EnterpriseAdminListPreReceiveEnvironmentsSortEnum(str, Enum):
    CREATED = "created"
    UPDATED = "updated"
    NAME = "name"


@dataclass
class EnterpriseAdminListPreReceiveEnvironmentsQueryParams:
    direction: Optional[shared.DirectionEnum] = field(default=None, metadata={'query_param': { 'field_name': 'direction', 'style': 'form', 'explode': True }})
    page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    per_page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'per_page', 'style': 'form', 'explode': True }})
    sort: Optional[EnterpriseAdminListPreReceiveEnvironmentsSortEnum] = field(default=None, metadata={'query_param': { 'field_name': 'sort', 'style': 'form', 'explode': True }})
    

@dataclass
class EnterpriseAdminListPreReceiveEnvironmentsRequest:
    query_params: EnterpriseAdminListPreReceiveEnvironmentsQueryParams = field(default=None)
    

@dataclass
class EnterpriseAdminListPreReceiveEnvironmentsResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    pre_receive_environments: Optional[List[shared.PreReceiveEnvironment]] = field(default=None)
    
