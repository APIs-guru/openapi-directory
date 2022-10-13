from dataclasses import dataclass, field
from typing import Enum,Optional

class GetAuthorizeDataShareActionEnum(str, Enum):
    AUTHORIZE_DATA_SHARE = "AuthorizeDataShare"

class GetAuthorizeDataShareVersionEnum(str, Enum):
    TWO_THOUSAND_AND_TWELVE_12_01 = "2012-12-01"


@dataclass
class GetAuthorizeDataShareQueryParams:
    action: GetAuthorizeDataShareActionEnum = field(default=None, metadata={'query_param': { 'field_name': 'Action', 'style': 'form', 'explode': True }})
    consumer_identifier: str = field(default=None, metadata={'query_param': { 'field_name': 'ConsumerIdentifier', 'style': 'form', 'explode': True }})
    data_share_arn: str = field(default=None, metadata={'query_param': { 'field_name': 'DataShareArn', 'style': 'form', 'explode': True }})
    version: GetAuthorizeDataShareVersionEnum = field(default=None, metadata={'query_param': { 'field_name': 'Version', 'style': 'form', 'explode': True }})
    

@dataclass
class GetAuthorizeDataShareHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm' }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256' }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential' }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date' }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token' }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature' }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders' }})
    

@dataclass
class GetAuthorizeDataShareRequest:
    query_params: GetAuthorizeDataShareQueryParams = field(default=None)
    headers: GetAuthorizeDataShareHeaders = field(default=None)
    

@dataclass
class GetAuthorizeDataShareResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
