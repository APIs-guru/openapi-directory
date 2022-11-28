from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum

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
    account_id: str = field(metadata={'query_param': { 'field_name': 'AccountId', 'style': 'form', 'explode': True }})
    action: GetUpdatePartnerStatusActionEnum = field(metadata={'query_param': { 'field_name': 'Action', 'style': 'form', 'explode': True }})
    cluster_identifier: str = field(metadata={'query_param': { 'field_name': 'ClusterIdentifier', 'style': 'form', 'explode': True }})
    database_name: str = field(metadata={'query_param': { 'field_name': 'DatabaseName', 'style': 'form', 'explode': True }})
    partner_name: str = field(metadata={'query_param': { 'field_name': 'PartnerName', 'style': 'form', 'explode': True }})
    status: GetUpdatePartnerStatusStatusEnum = field(metadata={'query_param': { 'field_name': 'Status', 'style': 'form', 'explode': True }})
    version: GetUpdatePartnerStatusVersionEnum = field(metadata={'query_param': { 'field_name': 'Version', 'style': 'form', 'explode': True }})
    status_message: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'StatusMessage', 'style': 'form', 'explode': True }})
    

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
    headers: GetUpdatePartnerStatusHeaders = field()
    query_params: GetUpdatePartnerStatusQueryParams = field()
    

@dataclass
class GetUpdatePartnerStatusResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    
