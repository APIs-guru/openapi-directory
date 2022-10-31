from dataclasses import dataclass, field
from typing import Enum,Optional

class GetEnableSnapshotCopyActionEnum(str, Enum):
    ENABLE_SNAPSHOT_COPY = "EnableSnapshotCopy"

class GetEnableSnapshotCopyVersionEnum(str, Enum):
    TWO_THOUSAND_AND_TWELVE_12_01 = "2012-12-01"


@dataclass
class GetEnableSnapshotCopyQueryParams:
    action: GetEnableSnapshotCopyActionEnum = field(default=None, metadata={'query_param': { 'field_name': 'Action', 'style': 'form', 'explode': True }})
    cluster_identifier: str = field(default=None, metadata={'query_param': { 'field_name': 'ClusterIdentifier', 'style': 'form', 'explode': True }})
    destination_region: str = field(default=None, metadata={'query_param': { 'field_name': 'DestinationRegion', 'style': 'form', 'explode': True }})
    manual_snapshot_retention_period: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'ManualSnapshotRetentionPeriod', 'style': 'form', 'explode': True }})
    retention_period: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'RetentionPeriod', 'style': 'form', 'explode': True }})
    snapshot_copy_grant_name: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'SnapshotCopyGrantName', 'style': 'form', 'explode': True }})
    version: GetEnableSnapshotCopyVersionEnum = field(default=None, metadata={'query_param': { 'field_name': 'Version', 'style': 'form', 'explode': True }})
    

@dataclass
class GetEnableSnapshotCopyHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetEnableSnapshotCopyRequest:
    query_params: GetEnableSnapshotCopyQueryParams = field(default=None)
    headers: GetEnableSnapshotCopyHeaders = field(default=None)
    

@dataclass
class GetEnableSnapshotCopyResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
