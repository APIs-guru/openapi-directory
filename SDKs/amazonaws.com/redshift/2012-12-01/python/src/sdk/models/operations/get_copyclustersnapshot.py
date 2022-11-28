from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum

class GetCopyClusterSnapshotActionEnum(str, Enum):
    COPY_CLUSTER_SNAPSHOT = "CopyClusterSnapshot"

class GetCopyClusterSnapshotVersionEnum(str, Enum):
    TWO_THOUSAND_AND_TWELVE_12_01 = "2012-12-01"


@dataclass
class GetCopyClusterSnapshotQueryParams:
    action: GetCopyClusterSnapshotActionEnum = field(metadata={'query_param': { 'field_name': 'Action', 'style': 'form', 'explode': True }})
    source_snapshot_identifier: str = field(metadata={'query_param': { 'field_name': 'SourceSnapshotIdentifier', 'style': 'form', 'explode': True }})
    target_snapshot_identifier: str = field(metadata={'query_param': { 'field_name': 'TargetSnapshotIdentifier', 'style': 'form', 'explode': True }})
    version: GetCopyClusterSnapshotVersionEnum = field(metadata={'query_param': { 'field_name': 'Version', 'style': 'form', 'explode': True }})
    manual_snapshot_retention_period: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'ManualSnapshotRetentionPeriod', 'style': 'form', 'explode': True }})
    source_snapshot_cluster_identifier: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'SourceSnapshotClusterIdentifier', 'style': 'form', 'explode': True }})
    

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
    headers: GetCopyClusterSnapshotHeaders = field()
    query_params: GetCopyClusterSnapshotQueryParams = field()
    

@dataclass
class GetCopyClusterSnapshotResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    
