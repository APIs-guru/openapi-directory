from dataclasses import dataclass, field
from typing import Enum,List,Optional

class GetCreateEndpointAccessActionEnum(str, Enum):
    CREATE_ENDPOINT_ACCESS = "CreateEndpointAccess"

class GetCreateEndpointAccessVersionEnum(str, Enum):
    TWO_THOUSAND_AND_TWELVE_12_01 = "2012-12-01"


@dataclass
class GetCreateEndpointAccessQueryParams:
    action: GetCreateEndpointAccessActionEnum = field(default=None, metadata={'query_param': { 'field_name': 'Action', 'style': 'form', 'explode': True }})
    cluster_identifier: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'ClusterIdentifier', 'style': 'form', 'explode': True }})
    endpoint_name: str = field(default=None, metadata={'query_param': { 'field_name': 'EndpointName', 'style': 'form', 'explode': True }})
    resource_owner: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'ResourceOwner', 'style': 'form', 'explode': True }})
    subnet_group_name: str = field(default=None, metadata={'query_param': { 'field_name': 'SubnetGroupName', 'style': 'form', 'explode': True }})
    version: GetCreateEndpointAccessVersionEnum = field(default=None, metadata={'query_param': { 'field_name': 'Version', 'style': 'form', 'explode': True }})
    vpc_security_group_ids: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'VpcSecurityGroupIds', 'style': 'form', 'explode': True }})
    

@dataclass
class GetCreateEndpointAccessHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm' }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256' }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential' }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date' }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token' }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature' }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders' }})
    

@dataclass
class GetCreateEndpointAccessRequest:
    query_params: GetCreateEndpointAccessQueryParams = field(default=None)
    headers: GetCreateEndpointAccessHeaders = field(default=None)
    

@dataclass
class GetCreateEndpointAccessResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
