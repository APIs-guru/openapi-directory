from dataclasses import dataclass, field
from typing import Enum,List,Optional

class GetModifyDbClusterEndpointActionEnum(str, Enum):
    MODIFY_DB_CLUSTER_ENDPOINT = "ModifyDBClusterEndpoint"

class GetModifyDbClusterEndpointVersionEnum(str, Enum):
    TWO_THOUSAND_AND_FOURTEEN_10_31 = "2014-10-31"


@dataclass
class GetModifyDbClusterEndpointQueryParams:
    action: GetModifyDbClusterEndpointActionEnum = field(default=None, metadata={'query_param': { 'field_name': 'Action', 'style': 'form', 'explode': True }})
    db_cluster_endpoint_identifier: str = field(default=None, metadata={'query_param': { 'field_name': 'DBClusterEndpointIdentifier', 'style': 'form', 'explode': True }})
    endpoint_type: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'EndpointType', 'style': 'form', 'explode': True }})
    excluded_members: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'ExcludedMembers', 'style': 'form', 'explode': True }})
    static_members: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'StaticMembers', 'style': 'form', 'explode': True }})
    version: GetModifyDbClusterEndpointVersionEnum = field(default=None, metadata={'query_param': { 'field_name': 'Version', 'style': 'form', 'explode': True }})
    

@dataclass
class GetModifyDbClusterEndpointHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm' }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256' }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential' }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date' }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token' }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature' }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders' }})
    

@dataclass
class GetModifyDbClusterEndpointRequest:
    query_params: GetModifyDbClusterEndpointQueryParams = field(default=None)
    headers: GetModifyDbClusterEndpointHeaders = field(default=None)
    

@dataclass
class GetModifyDbClusterEndpointResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
