from dataclasses import dataclass, field
from typing import Enum,Optional

class GetAuthorizeSnapshotAccessActionEnum(str, Enum):
    AUTHORIZE_SNAPSHOT_ACCESS = "AuthorizeSnapshotAccess"

class GetAuthorizeSnapshotAccessVersionEnum(str, Enum):
    TWO_THOUSAND_AND_TWELVE_12_01 = "2012-12-01"


@dataclass
class GetAuthorizeSnapshotAccessQueryParams:
    account_with_restore_access: str = field(default=None, metadata={'query_param': { 'field_name': 'AccountWithRestoreAccess', 'style': 'form', 'explode': True }})
    action: GetAuthorizeSnapshotAccessActionEnum = field(default=None, metadata={'query_param': { 'field_name': 'Action', 'style': 'form', 'explode': True }})
    snapshot_cluster_identifier: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'SnapshotClusterIdentifier', 'style': 'form', 'explode': True }})
    snapshot_identifier: str = field(default=None, metadata={'query_param': { 'field_name': 'SnapshotIdentifier', 'style': 'form', 'explode': True }})
    version: GetAuthorizeSnapshotAccessVersionEnum = field(default=None, metadata={'query_param': { 'field_name': 'Version', 'style': 'form', 'explode': True }})
    

@dataclass
class GetAuthorizeSnapshotAccessHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm' }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256' }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential' }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date' }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token' }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature' }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders' }})
    

@dataclass
class GetAuthorizeSnapshotAccessRequest:
    query_params: GetAuthorizeSnapshotAccessQueryParams = field(default=None)
    headers: GetAuthorizeSnapshotAccessHeaders = field(default=None)
    

@dataclass
class GetAuthorizeSnapshotAccessResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
