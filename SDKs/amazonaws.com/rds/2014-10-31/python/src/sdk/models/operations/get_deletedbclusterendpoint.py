from dataclasses import dataclass, field
from typing import Enum,Optional

class GetDeleteDbClusterEndpointActionEnum(str, Enum):
    DELETE_DB_CLUSTER_ENDPOINT = "DeleteDBClusterEndpoint"

class GetDeleteDbClusterEndpointVersionEnum(str, Enum):
    TWO_THOUSAND_AND_FOURTEEN_10_31 = "2014-10-31"


@dataclass
class GetDeleteDbClusterEndpointQueryParams:
    action: GetDeleteDbClusterEndpointActionEnum = field(default=None, metadata={'query_param': { 'field_name': 'Action', 'style': 'form', 'explode': True }})
    db_cluster_endpoint_identifier: str = field(default=None, metadata={'query_param': { 'field_name': 'DBClusterEndpointIdentifier', 'style': 'form', 'explode': True }})
    version: GetDeleteDbClusterEndpointVersionEnum = field(default=None, metadata={'query_param': { 'field_name': 'Version', 'style': 'form', 'explode': True }})
    

@dataclass
class GetDeleteDbClusterEndpointHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetDeleteDbClusterEndpointRequest:
    query_params: GetDeleteDbClusterEndpointQueryParams = field(default=None)
    headers: GetDeleteDbClusterEndpointHeaders = field(default=None)
    

@dataclass
class GetDeleteDbClusterEndpointResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
