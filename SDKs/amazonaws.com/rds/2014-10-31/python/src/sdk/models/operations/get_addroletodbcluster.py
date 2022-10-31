from dataclasses import dataclass, field
from typing import Enum,Optional

class GetAddRoleToDbClusterActionEnum(str, Enum):
    ADD_ROLE_TO_DB_CLUSTER = "AddRoleToDBCluster"

class GetAddRoleToDbClusterVersionEnum(str, Enum):
    TWO_THOUSAND_AND_FOURTEEN_10_31 = "2014-10-31"


@dataclass
class GetAddRoleToDbClusterQueryParams:
    action: GetAddRoleToDbClusterActionEnum = field(default=None, metadata={'query_param': { 'field_name': 'Action', 'style': 'form', 'explode': True }})
    db_cluster_identifier: str = field(default=None, metadata={'query_param': { 'field_name': 'DBClusterIdentifier', 'style': 'form', 'explode': True }})
    feature_name: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'FeatureName', 'style': 'form', 'explode': True }})
    role_arn: str = field(default=None, metadata={'query_param': { 'field_name': 'RoleArn', 'style': 'form', 'explode': True }})
    version: GetAddRoleToDbClusterVersionEnum = field(default=None, metadata={'query_param': { 'field_name': 'Version', 'style': 'form', 'explode': True }})
    

@dataclass
class GetAddRoleToDbClusterHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetAddRoleToDbClusterRequest:
    query_params: GetAddRoleToDbClusterQueryParams = field(default=None)
    headers: GetAddRoleToDbClusterHeaders = field(default=None)
    

@dataclass
class GetAddRoleToDbClusterResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
