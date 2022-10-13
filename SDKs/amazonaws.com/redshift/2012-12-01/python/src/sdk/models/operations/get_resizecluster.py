from dataclasses import dataclass, field
from typing import Enum,Optional

class GetResizeClusterActionEnum(str, Enum):
    RESIZE_CLUSTER = "ResizeCluster"

class GetResizeClusterVersionEnum(str, Enum):
    TWO_THOUSAND_AND_TWELVE_12_01 = "2012-12-01"


@dataclass
class GetResizeClusterQueryParams:
    action: GetResizeClusterActionEnum = field(default=None, metadata={'query_param': { 'field_name': 'Action', 'style': 'form', 'explode': True }})
    classic: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'Classic', 'style': 'form', 'explode': True }})
    cluster_identifier: str = field(default=None, metadata={'query_param': { 'field_name': 'ClusterIdentifier', 'style': 'form', 'explode': True }})
    cluster_type: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'ClusterType', 'style': 'form', 'explode': True }})
    node_type: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'NodeType', 'style': 'form', 'explode': True }})
    number_of_nodes: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'NumberOfNodes', 'style': 'form', 'explode': True }})
    version: GetResizeClusterVersionEnum = field(default=None, metadata={'query_param': { 'field_name': 'Version', 'style': 'form', 'explode': True }})
    

@dataclass
class GetResizeClusterHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm' }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256' }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential' }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date' }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token' }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature' }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders' }})
    

@dataclass
class GetResizeClusterRequest:
    query_params: GetResizeClusterQueryParams = field(default=None)
    headers: GetResizeClusterHeaders = field(default=None)
    

@dataclass
class GetResizeClusterResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
