from dataclasses import dataclass, field
from typing import Enum,List,Optional

class GetModifyDbProxyTargetGroupActionEnum(str, Enum):
    MODIFY_DB_PROXY_TARGET_GROUP = "ModifyDBProxyTargetGroup"


@dataclass
class GetModifyDbProxyTargetGroupConnectionPoolConfig:
    connection_borrow_timeout: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'ConnectionBorrowTimeout' }})
    init_query: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'InitQuery' }})
    max_connections_percent: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'MaxConnectionsPercent' }})
    max_idle_connections_percent: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'MaxIdleConnectionsPercent' }})
    session_pinning_filters: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'SessionPinningFilters' }})
    
class GetModifyDbProxyTargetGroupVersionEnum(str, Enum):
    TWO_THOUSAND_AND_FOURTEEN_10_31 = "2014-10-31"


@dataclass
class GetModifyDbProxyTargetGroupQueryParams:
    action: GetModifyDbProxyTargetGroupActionEnum = field(default=None, metadata={'query_param': { 'field_name': 'Action', 'style': 'form', 'explode': True }})
    connection_pool_config: Optional[GetModifyDbProxyTargetGroupConnectionPoolConfig] = field(default=None, metadata={'query_param': { 'field_name': 'ConnectionPoolConfig', 'style': 'form', 'explode': True }})
    db_proxy_name: str = field(default=None, metadata={'query_param': { 'field_name': 'DBProxyName', 'style': 'form', 'explode': True }})
    new_name: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'NewName', 'style': 'form', 'explode': True }})
    target_group_name: str = field(default=None, metadata={'query_param': { 'field_name': 'TargetGroupName', 'style': 'form', 'explode': True }})
    version: GetModifyDbProxyTargetGroupVersionEnum = field(default=None, metadata={'query_param': { 'field_name': 'Version', 'style': 'form', 'explode': True }})
    

@dataclass
class GetModifyDbProxyTargetGroupHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetModifyDbProxyTargetGroupRequest:
    query_params: GetModifyDbProxyTargetGroupQueryParams = field(default=None)
    headers: GetModifyDbProxyTargetGroupHeaders = field(default=None)
    

@dataclass
class GetModifyDbProxyTargetGroupResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
