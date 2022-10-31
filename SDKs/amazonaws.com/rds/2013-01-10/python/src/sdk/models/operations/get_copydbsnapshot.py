from dataclasses import dataclass, field
from typing import Enum,Optional

class GetCopyDbSnapshotActionEnum(str, Enum):
    COPY_DB_SNAPSHOT = "CopyDBSnapshot"

class GetCopyDbSnapshotVersionEnum(str, Enum):
    TWO_THOUSAND_AND_THIRTEEN_01_10 = "2013-01-10"


@dataclass
class GetCopyDbSnapshotQueryParams:
    action: GetCopyDbSnapshotActionEnum = field(default=None, metadata={'query_param': { 'field_name': 'Action', 'style': 'form', 'explode': True }})
    source_db_snapshot_identifier: str = field(default=None, metadata={'query_param': { 'field_name': 'SourceDBSnapshotIdentifier', 'style': 'form', 'explode': True }})
    target_db_snapshot_identifier: str = field(default=None, metadata={'query_param': { 'field_name': 'TargetDBSnapshotIdentifier', 'style': 'form', 'explode': True }})
    version: GetCopyDbSnapshotVersionEnum = field(default=None, metadata={'query_param': { 'field_name': 'Version', 'style': 'form', 'explode': True }})
    

@dataclass
class GetCopyDbSnapshotHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetCopyDbSnapshotRequest:
    query_params: GetCopyDbSnapshotQueryParams = field(default=None)
    headers: GetCopyDbSnapshotHeaders = field(default=None)
    

@dataclass
class GetCopyDbSnapshotResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
