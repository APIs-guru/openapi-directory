from dataclasses import dataclass, field
from typing import Enum,Optional

class GetCopyClusterSnapshotActionEnum(str, Enum):
    COPY_CLUSTER_SNAPSHOT = "CopyClusterSnapshot"

class GetCopyClusterSnapshotVersionEnum(str, Enum):
    TWO_THOUSAND_AND_TWELVE_12_01 = "2012-12-01"


@dataclass
class GetCopyClusterSnapshotQueryParams:
    action: GetCopyClusterSnapshotActionEnum = field(default=None, metadata={'query_param': { 'field_name': 'Action', 'style': 'form', 'explode': True }})
    manual_snapshot_retention_period: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'ManualSnapshotRetentionPeriod', 'style': 'form', 'explode': True }})
    source_snapshot_cluster_identifier: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'SourceSnapshotClusterIdentifier', 'style': 'form', 'explode': True }})
    source_snapshot_identifier: str = field(default=None, metadata={'query_param': { 'field_name': 'SourceSnapshotIdentifier', 'style': 'form', 'explode': True }})
    target_snapshot_identifier: str = field(default=None, metadata={'query_param': { 'field_name': 'TargetSnapshotIdentifier', 'style': 'form', 'explode': True }})
    version: GetCopyClusterSnapshotVersionEnum = field(default=None, metadata={'query_param': { 'field_name': 'Version', 'style': 'form', 'explode': True }})
    

@dataclass
class GetCopyClusterSnapshotHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetCopyClusterSnapshotRequest:
    query_params: GetCopyClusterSnapshotQueryParams = field(default=None)
    headers: GetCopyClusterSnapshotHeaders = field(default=None)
    

@dataclass
class GetCopyClusterSnapshotResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
