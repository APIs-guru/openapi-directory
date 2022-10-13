from dataclasses import dataclass, field
from typing import Enum,List,Optional

class GetRevokeEndpointAccessActionEnum(str, Enum):
    REVOKE_ENDPOINT_ACCESS = "RevokeEndpointAccess"

class GetRevokeEndpointAccessVersionEnum(str, Enum):
    TWO_THOUSAND_AND_TWELVE_12_01 = "2012-12-01"


@dataclass
class GetRevokeEndpointAccessQueryParams:
    account: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'Account', 'style': 'form', 'explode': True }})
    action: GetRevokeEndpointAccessActionEnum = field(default=None, metadata={'query_param': { 'field_name': 'Action', 'style': 'form', 'explode': True }})
    cluster_identifier: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'ClusterIdentifier', 'style': 'form', 'explode': True }})
    force: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'Force', 'style': 'form', 'explode': True }})
    version: GetRevokeEndpointAccessVersionEnum = field(default=None, metadata={'query_param': { 'field_name': 'Version', 'style': 'form', 'explode': True }})
    vpc_ids: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'VpcIds', 'style': 'form', 'explode': True }})
    

@dataclass
class GetRevokeEndpointAccessHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm' }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256' }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential' }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date' }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token' }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature' }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders' }})
    

@dataclass
class GetRevokeEndpointAccessRequest:
    query_params: GetRevokeEndpointAccessQueryParams = field(default=None)
    headers: GetRevokeEndpointAccessHeaders = field(default=None)
    

@dataclass
class GetRevokeEndpointAccessResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
