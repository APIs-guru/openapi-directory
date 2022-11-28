from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from enum import Enum
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
    query_params: EnterpriseAdminListPublicKeysQueryParams = field()
    

@dataclass
class EnterpriseAdminListPublicKeysResponse:
    content_type: str = field()
    headers: dict[str, List[str]] = field()
    status_code: int = field()
    enterprise_public_keys: Optional[List[shared.EnterprisePublicKey]] = field(default=None)
    
