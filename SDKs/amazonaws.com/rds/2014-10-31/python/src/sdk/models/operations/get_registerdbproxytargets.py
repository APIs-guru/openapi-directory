from dataclasses import dataclass, field
from typing import Enum,List,Optional

class GetRegisterDbProxyTargetsActionEnum(str, Enum):
    REGISTER_DB_PROXY_TARGETS = "RegisterDBProxyTargets"

class GetRegisterDbProxyTargetsVersionEnum(str, Enum):
    TWO_THOUSAND_AND_FOURTEEN_10_31 = "2014-10-31"


@dataclass
class GetRegisterDbProxyTargetsQueryParams:
    action: GetRegisterDbProxyTargetsActionEnum = field(default=None, metadata={'query_param': { 'field_name': 'Action', 'style': 'form', 'explode': True }})
    db_cluster_identifiers: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'DBClusterIdentifiers', 'style': 'form', 'explode': True }})
    db_instance_identifiers: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'DBInstanceIdentifiers', 'style': 'form', 'explode': True }})
    db_proxy_name: str = field(default=None, metadata={'query_param': { 'field_name': 'DBProxyName', 'style': 'form', 'explode': True }})
    target_group_name: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'TargetGroupName', 'style': 'form', 'explode': True }})
    version: GetRegisterDbProxyTargetsVersionEnum = field(default=None, metadata={'query_param': { 'field_name': 'Version', 'style': 'form', 'explode': True }})
    

@dataclass
class GetRegisterDbProxyTargetsHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm' }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256' }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential' }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date' }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token' }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature' }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders' }})
    

@dataclass
class GetRegisterDbProxyTargetsRequest:
    query_params: GetRegisterDbProxyTargetsQueryParams = field(default=None)
    headers: GetRegisterDbProxyTargetsHeaders = field(default=None)
    

@dataclass
class GetRegisterDbProxyTargetsResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
