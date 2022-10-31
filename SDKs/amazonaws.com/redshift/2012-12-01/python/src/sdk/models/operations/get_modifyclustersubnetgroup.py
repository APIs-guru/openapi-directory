from dataclasses import dataclass, field
from typing import Enum,List,Optional

class GetModifyClusterSubnetGroupActionEnum(str, Enum):
    MODIFY_CLUSTER_SUBNET_GROUP = "ModifyClusterSubnetGroup"

class GetModifyClusterSubnetGroupVersionEnum(str, Enum):
    TWO_THOUSAND_AND_TWELVE_12_01 = "2012-12-01"


@dataclass
class GetModifyClusterSubnetGroupQueryParams:
    action: GetModifyClusterSubnetGroupActionEnum = field(default=None, metadata={'query_param': { 'field_name': 'Action', 'style': 'form', 'explode': True }})
    cluster_subnet_group_name: str = field(default=None, metadata={'query_param': { 'field_name': 'ClusterSubnetGroupName', 'style': 'form', 'explode': True }})
    description: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'Description', 'style': 'form', 'explode': True }})
    subnet_ids: List[str] = field(default=None, metadata={'query_param': { 'field_name': 'SubnetIds', 'style': 'form', 'explode': True }})
    version: GetModifyClusterSubnetGroupVersionEnum = field(default=None, metadata={'query_param': { 'field_name': 'Version', 'style': 'form', 'explode': True }})
    

@dataclass
class GetModifyClusterSubnetGroupHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetModifyClusterSubnetGroupRequest:
    query_params: GetModifyClusterSubnetGroupQueryParams = field(default=None)
    headers: GetModifyClusterSubnetGroupHeaders = field(default=None)
    

@dataclass
class GetModifyClusterSubnetGroupResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
