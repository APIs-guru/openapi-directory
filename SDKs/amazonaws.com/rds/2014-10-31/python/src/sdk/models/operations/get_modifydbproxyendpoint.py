from dataclasses import dataclass, field
from typing import Enum,List,Optional

class GetModifyDbProxyEndpointActionEnum(str, Enum):
    MODIFY_DB_PROXY_ENDPOINT = "ModifyDBProxyEndpoint"

class GetModifyDbProxyEndpointVersionEnum(str, Enum):
    TWO_THOUSAND_AND_FOURTEEN_10_31 = "2014-10-31"


@dataclass
class GetModifyDbProxyEndpointQueryParams:
    action: GetModifyDbProxyEndpointActionEnum = field(default=None, metadata={'query_param': { 'field_name': 'Action', 'style': 'form', 'explode': True }})
    db_proxy_endpoint_name: str = field(default=None, metadata={'query_param': { 'field_name': 'DBProxyEndpointName', 'style': 'form', 'explode': True }})
    new_db_proxy_endpoint_name: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'NewDBProxyEndpointName', 'style': 'form', 'explode': True }})
    version: GetModifyDbProxyEndpointVersionEnum = field(default=None, metadata={'query_param': { 'field_name': 'Version', 'style': 'form', 'explode': True }})
    vpc_security_group_ids: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'VpcSecurityGroupIds', 'style': 'form', 'explode': True }})
    

@dataclass
class GetModifyDbProxyEndpointHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetModifyDbProxyEndpointRequest:
    query_params: GetModifyDbProxyEndpointQueryParams = field(default=None)
    headers: GetModifyDbProxyEndpointHeaders = field(default=None)
    

@dataclass
class GetModifyDbProxyEndpointResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
