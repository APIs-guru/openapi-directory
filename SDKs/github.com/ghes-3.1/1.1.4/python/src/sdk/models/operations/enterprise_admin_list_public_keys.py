from dataclasses import dataclass, field
from typing import Enum,List,Optional
from sdk.models import shared

class EnterpriseAdminListPublicKeysSortEnum(str, Enum):
    CREATED = "created"
    UPDATED = "updated"
    ACCESSED = "accessed"


@dataclass
class EnterpriseAdminListPublicKeysQueryParams:
    direction: Optional[shared.DirectionEnum] = field(default=None, metadata={'query_param': { 'field_name': 'direction', 'style': 'form', 'explode': True }})
    page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    per_page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'per_page', 'style': 'form', 'explode': True }})
    since: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'since', 'style': 'form', 'explode': True }})
    sort: Optional[EnterpriseAdminListPublicKeysSortEnum] = field(default=None, metadata={'query_param': { 'field_name': 'sort', 'style': 'form', 'explode': True }})
    

@dataclass
class EnterpriseAdminListPublicKeysRequest:
    query_params: EnterpriseAdminListPublicKeysQueryParams = field(default=None)
    

@dataclass
class EnterpriseAdminListPublicKeysResponse:
    content_type: str = field(default=None)
    headers: dict[str, List[str]] = field(default=None)
    status_code: int = field(default=None)
    enterprise_public_keys: Optional[List[shared.EnterprisePublicKey]] = field(default=None)
    
