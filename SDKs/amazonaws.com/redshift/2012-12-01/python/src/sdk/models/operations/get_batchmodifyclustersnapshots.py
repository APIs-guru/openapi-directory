from dataclasses import dataclass, field
from typing import Enum,List,Optional

class GetBatchModifyClusterSnapshotsActionEnum(str, Enum):
    BATCH_MODIFY_CLUSTER_SNAPSHOTS = "BatchModifyClusterSnapshots"

class GetBatchModifyClusterSnapshotsVersionEnum(str, Enum):
    TWO_THOUSAND_AND_TWELVE_12_01 = "2012-12-01"


@dataclass
class GetBatchModifyClusterSnapshotsQueryParams:
    action: GetBatchModifyClusterSnapshotsActionEnum = field(default=None, metadata={'query_param': { 'field_name': 'Action', 'style': 'form', 'explode': True }})
    force: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'Force', 'style': 'form', 'explode': True }})
    manual_snapshot_retention_period: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'ManualSnapshotRetentionPeriod', 'style': 'form', 'explode': True }})
    snapshot_identifier_list: List[str] = field(default=None, metadata={'query_param': { 'field_name': 'SnapshotIdentifierList', 'style': 'form', 'explode': True }})
    version: GetBatchModifyClusterSnapshotsVersionEnum = field(default=None, metadata={'query_param': { 'field_name': 'Version', 'style': 'form', 'explode': True }})
    

@dataclass
class GetBatchModifyClusterSnapshotsHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetBatchModifyClusterSnapshotsRequest:
    query_params: GetBatchModifyClusterSnapshotsQueryParams = field(default=None)
    headers: GetBatchModifyClusterSnapshotsHeaders = field(default=None)
    

@dataclass
class GetBatchModifyClusterSnapshotsResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
