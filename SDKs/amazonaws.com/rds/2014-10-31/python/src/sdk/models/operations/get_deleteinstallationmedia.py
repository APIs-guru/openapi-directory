from dataclasses import dataclass, field
from typing import Enum,Optional

class GetDeleteInstallationMediaActionEnum(str, Enum):
    DELETE_INSTALLATION_MEDIA = "DeleteInstallationMedia"

class GetDeleteInstallationMediaVersionEnum(str, Enum):
    TWO_THOUSAND_AND_FOURTEEN_10_31 = "2014-10-31"


@dataclass
class GetDeleteInstallationMediaQueryParams:
    action: GetDeleteInstallationMediaActionEnum = field(default=None, metadata={'query_param': { 'field_name': 'Action', 'style': 'form', 'explode': True }})
    installation_media_id: str = field(default=None, metadata={'query_param': { 'field_name': 'InstallationMediaId', 'style': 'form', 'explode': True }})
    version: GetDeleteInstallationMediaVersionEnum = field(default=None, metadata={'query_param': { 'field_name': 'Version', 'style': 'form', 'explode': True }})
    

@dataclass
class GetDeleteInstallationMediaHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm' }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256' }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential' }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date' }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token' }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature' }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders' }})
    

@dataclass
class GetDeleteInstallationMediaRequest:
    query_params: GetDeleteInstallationMediaQueryParams = field(default=None)
    headers: GetDeleteInstallationMediaHeaders = field(default=None)
    

@dataclass
class GetDeleteInstallationMediaResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
