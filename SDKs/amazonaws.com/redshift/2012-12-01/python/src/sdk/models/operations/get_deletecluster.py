from dataclasses import dataclass, field
from typing import Enum,Optional

class GetDeleteClusterActionEnum(str, Enum):
    DELETE_CLUSTER = "DeleteCluster"

class GetDeleteClusterVersionEnum(str, Enum):
    TWO_THOUSAND_AND_TWELVE_12_01 = "2012-12-01"


@dataclass
class GetDeleteClusterQueryParams:
    action: GetDeleteClusterActionEnum = field(default=None, metadata={'query_param': { 'field_name': 'Action', 'style': 'form', 'explode': True }})
    cluster_identifier: str = field(default=None, metadata={'query_param': { 'field_name': 'ClusterIdentifier', 'style': 'form', 'explode': True }})
    final_cluster_snapshot_identifier: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'FinalClusterSnapshotIdentifier', 'style': 'form', 'explode': True }})
    final_cluster_snapshot_retention_period: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'FinalClusterSnapshotRetentionPeriod', 'style': 'form', 'explode': True }})
    skip_final_cluster_snapshot: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'SkipFinalClusterSnapshot', 'style': 'form', 'explode': True }})
    version: GetDeleteClusterVersionEnum = field(default=None, metadata={'query_param': { 'field_name': 'Version', 'style': 'form', 'explode': True }})
    

@dataclass
class GetDeleteClusterHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetDeleteClusterRequest:
    query_params: GetDeleteClusterQueryParams = field(default=None)
    headers: GetDeleteClusterHeaders = field(default=None)
    

@dataclass
class GetDeleteClusterResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
