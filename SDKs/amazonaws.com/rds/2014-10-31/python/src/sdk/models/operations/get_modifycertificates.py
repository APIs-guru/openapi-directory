from dataclasses import dataclass, field
from typing import Enum,Optional

class GetModifyCertificatesActionEnum(str, Enum):
    MODIFY_CERTIFICATES = "ModifyCertificates"

class GetModifyCertificatesVersionEnum(str, Enum):
    TWO_THOUSAND_AND_FOURTEEN_10_31 = "2014-10-31"


@dataclass
class GetModifyCertificatesQueryParams:
    action: GetModifyCertificatesActionEnum = field(default=None, metadata={'query_param': { 'field_name': 'Action', 'style': 'form', 'explode': True }})
    certificate_identifier: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'CertificateIdentifier', 'style': 'form', 'explode': True }})
    remove_customer_override: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'RemoveCustomerOverride', 'style': 'form', 'explode': True }})
    version: GetModifyCertificatesVersionEnum = field(default=None, metadata={'query_param': { 'field_name': 'Version', 'style': 'form', 'explode': True }})
    

@dataclass
class GetModifyCertificatesHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm' }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256' }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential' }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date' }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token' }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature' }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders' }})
    

@dataclass
class GetModifyCertificatesRequest:
    query_params: GetModifyCertificatesQueryParams = field(default=None)
    headers: GetModifyCertificatesHeaders = field(default=None)
    

@dataclass
class GetModifyCertificatesResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
