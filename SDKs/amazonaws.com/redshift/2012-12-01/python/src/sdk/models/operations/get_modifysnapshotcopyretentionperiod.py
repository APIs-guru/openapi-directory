from dataclasses import dataclass, field
from typing import Enum,Optional

class GetModifySnapshotCopyRetentionPeriodActionEnum(str, Enum):
    MODIFY_SNAPSHOT_COPY_RETENTION_PERIOD = "ModifySnapshotCopyRetentionPeriod"

class GetModifySnapshotCopyRetentionPeriodVersionEnum(str, Enum):
    TWO_THOUSAND_AND_TWELVE_12_01 = "2012-12-01"


@dataclass
class GetModifySnapshotCopyRetentionPeriodQueryParams:
    action: GetModifySnapshotCopyRetentionPeriodActionEnum = field(default=None, metadata={'query_param': { 'field_name': 'Action', 'style': 'form', 'explode': True }})
    cluster_identifier: str = field(default=None, metadata={'query_param': { 'field_name': 'ClusterIdentifier', 'style': 'form', 'explode': True }})
    manual: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'Manual', 'style': 'form', 'explode': True }})
    retention_period: int = field(default=None, metadata={'query_param': { 'field_name': 'RetentionPeriod', 'style': 'form', 'explode': True }})
    version: GetModifySnapshotCopyRetentionPeriodVersionEnum = field(default=None, metadata={'query_param': { 'field_name': 'Version', 'style': 'form', 'explode': True }})
    

@dataclass
class GetModifySnapshotCopyRetentionPeriodHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm' }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256' }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential' }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date' }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token' }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature' }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders' }})
    

@dataclass
class GetModifySnapshotCopyRetentionPeriodRequest:
    query_params: GetModifySnapshotCopyRetentionPeriodQueryParams = field(default=None)
    headers: GetModifySnapshotCopyRetentionPeriodHeaders = field(default=None)
    

@dataclass
class GetModifySnapshotCopyRetentionPeriodResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
