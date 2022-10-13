from dataclasses import dataclass, field
from typing import Enum,Optional

class GetDescribeEndpointAuthorizationActionEnum(str, Enum):
    DESCRIBE_ENDPOINT_AUTHORIZATION = "DescribeEndpointAuthorization"

class GetDescribeEndpointAuthorizationVersionEnum(str, Enum):
    TWO_THOUSAND_AND_TWELVE_12_01 = "2012-12-01"


@dataclass
class GetDescribeEndpointAuthorizationQueryParams:
    account: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'Account', 'style': 'form', 'explode': True }})
    action: GetDescribeEndpointAuthorizationActionEnum = field(default=None, metadata={'query_param': { 'field_name': 'Action', 'style': 'form', 'explode': True }})
    cluster_identifier: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'ClusterIdentifier', 'style': 'form', 'explode': True }})
    grantee: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'Grantee', 'style': 'form', 'explode': True }})
    marker: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'Marker', 'style': 'form', 'explode': True }})
    max_records: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'MaxRecords', 'style': 'form', 'explode': True }})
    version: GetDescribeEndpointAuthorizationVersionEnum = field(default=None, metadata={'query_param': { 'field_name': 'Version', 'style': 'form', 'explode': True }})
    

@dataclass
class GetDescribeEndpointAuthorizationHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm' }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256' }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential' }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date' }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token' }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature' }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders' }})
    

@dataclass
class GetDescribeEndpointAuthorizationRequest:
    query_params: GetDescribeEndpointAuthorizationQueryParams = field(default=None)
    headers: GetDescribeEndpointAuthorizationHeaders = field(default=None)
    

@dataclass
class GetDescribeEndpointAuthorizationResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
