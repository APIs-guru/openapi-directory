from dataclasses import dataclass, field
from typing import Any,List,Optional
from sdk.models import shared


@dataclass
class GetUsersQueryParams:
    cursor: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'cursor', 'style': 'form', 'explode': True }})
    filter: Optional[dict[str, Any]] = field(default=None, metadata={'query_param': { 'field_name': 'filter', 'style': 'form', 'explode': True }})
    filter_gt: Optional[dict[str, Any]] = field(default=None, metadata={'query_param': { 'field_name': 'filter_gt', 'style': 'form', 'explode': True }})
    filter_gteq: Optional[dict[str, Any]] = field(default=None, metadata={'query_param': { 'field_name': 'filter_gteq', 'style': 'form', 'explode': True }})
    filter_like: Optional[dict[str, Any]] = field(default=None, metadata={'query_param': { 'field_name': 'filter_like', 'style': 'form', 'explode': True }})
    filter_lt: Optional[dict[str, Any]] = field(default=None, metadata={'query_param': { 'field_name': 'filter_lt', 'style': 'form', 'explode': True }})
    filter_lteq: Optional[dict[str, Any]] = field(default=None, metadata={'query_param': { 'field_name': 'filter_lteq', 'style': 'form', 'explode': True }})
    ids: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'ids', 'style': 'form', 'explode': True }})
    per_page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'per_page', 'style': 'form', 'explode': True }})
    q_admin_: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'q[admin]', 'style': 'form', 'explode': True }})
    q_allowed_ips_: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'q[allowed_ips]', 'style': 'form', 'explode': True }})
    q_email_: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'q[email]', 'style': 'form', 'explode': True }})
    q_notes_: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'q[notes]', 'style': 'form', 'explode': True }})
    q_password_validity_days_: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'q[password_validity_days]', 'style': 'form', 'explode': True }})
    q_ssl_required_: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'q[ssl_required]', 'style': 'form', 'explode': True }})
    q_username_: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'q[username]', 'style': 'form', 'explode': True }})
    search: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'search', 'style': 'form', 'explode': True }})
    sort_by: Optional[dict[str, Any]] = field(default=None, metadata={'query_param': { 'field_name': 'sort_by', 'style': 'form', 'explode': True }})
    

@dataclass
class GetUsersRequest:
    query_params: GetUsersQueryParams = field(default=None)
    

@dataclass
class GetUsersResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    user_entities: Optional[List[shared.UserEntity]] = field(default=None)
    
