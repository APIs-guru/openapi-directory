from dataclasses import dataclass, field
from typing import Enum,Optional

class GetDeleteSnapshotCopyGrantActionEnum(str, Enum):
    DELETE_SNAPSHOT_COPY_GRANT = "DeleteSnapshotCopyGrant"

class GetDeleteSnapshotCopyGrantVersionEnum(str, Enum):
    TWO_THOUSAND_AND_TWELVE_12_01 = "2012-12-01"


@dataclass
class GetDeleteSnapshotCopyGrantQueryParams:
    action: GetDeleteSnapshotCopyGrantActionEnum = field(default=None, metadata={'query_param': { 'field_name': 'Action', 'style': 'form', 'explode': True }})
    snapshot_copy_grant_name: str = field(default=None, metadata={'query_param': { 'field_name': 'SnapshotCopyGrantName', 'style': 'form', 'explode': True }})
    version: GetDeleteSnapshotCopyGrantVersionEnum = field(default=None, metadata={'query_param': { 'field_name': 'Version', 'style': 'form', 'explode': True }})
    

@dataclass
class GetDeleteSnapshotCopyGrantHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm' }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256' }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential' }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date' }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token' }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature' }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders' }})
    

@dataclass
class GetDeleteSnapshotCopyGrantRequest:
    query_params: GetDeleteSnapshotCopyGrantQueryParams = field(default=None)
    headers: GetDeleteSnapshotCopyGrantHeaders = field(default=None)
    

@dataclass
class GetDeleteSnapshotCopyGrantResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
