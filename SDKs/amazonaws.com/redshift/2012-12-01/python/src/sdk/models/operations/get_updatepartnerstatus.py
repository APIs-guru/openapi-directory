from dataclasses import dataclass, field
from typing import Enum,Optional

class GetUpdatePartnerStatusActionEnum(str, Enum):
    UPDATE_PARTNER_STATUS = "UpdatePartnerStatus"

class GetUpdatePartnerStatusStatusEnum(str, Enum):
    ACTIVE = "Active"
    INACTIVE = "Inactive"
    RUNTIME_FAILURE = "RuntimeFailure"
    CONNECTION_FAILURE = "ConnectionFailure"

class GetUpdatePartnerStatusVersionEnum(str, Enum):
    TWO_THOUSAND_AND_TWELVE_12_01 = "2012-12-01"


@dataclass
class GetUpdatePartnerStatusQueryParams:
    account_id: str = field(default=None, metadata={'query_param': { 'field_name': 'AccountId', 'style': 'form', 'explode': True }})
    action: GetUpdatePartnerStatusActionEnum = field(default=None, metadata={'query_param': { 'field_name': 'Action', 'style': 'form', 'explode': True }})
    cluster_identifier: str = field(default=None, metadata={'query_param': { 'field_name': 'ClusterIdentifier', 'style': 'form', 'explode': True }})
    database_name: str = field(default=None, metadata={'query_param': { 'field_name': 'DatabaseName', 'style': 'form', 'explode': True }})
    partner_name: str = field(default=None, metadata={'query_param': { 'field_name': 'PartnerName', 'style': 'form', 'explode': True }})
    status: GetUpdatePartnerStatusStatusEnum = field(default=None, metadata={'query_param': { 'field_name': 'Status', 'style': 'form', 'explode': True }})
    status_message: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'StatusMessage', 'style': 'form', 'explode': True }})
    version: GetUpdatePartnerStatusVersionEnum = field(default=None, metadata={'query_param': { 'field_name': 'Version', 'style': 'form', 'explode': True }})
    

@dataclass
class GetUpdatePartnerStatusHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetUpdatePartnerStatusRequest:
    query_params: GetUpdatePartnerStatusQueryParams = field(default=None)
    headers: GetUpdatePartnerStatusHeaders = field(default=None)
    

@dataclass
class GetUpdatePartnerStatusResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
