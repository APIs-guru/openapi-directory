from dataclasses import dataclass, field
from typing import Enum,Optional
from sdk.models import shared


@dataclass
class DownloadCertificatePathParams:
    sha1_fingerprint: str = field(default=None, metadata={'path_param': { 'field_name': 'sha1Fingerprint', 'style': 'simple', 'explode': False }})
    

@dataclass
class DownloadCertificateQueryParams:
    file_format: shared.SslCertificateFileFormatEnum = field(default=None, metadata={'query_param': { 'field_name': 'file_format', 'style': 'form', 'explode': True }})
    password: str = field(default=None, metadata={'query_param': { 'field_name': 'password', 'style': 'form', 'explode': True }})
    sha1_fingerprint: str = field(default=None, metadata={'query_param': { 'field_name': 'sha1_fingerprint', 'style': 'form', 'explode': True }})
    

@dataclass
class DownloadCertificateRequest:
    path_params: DownloadCertificatePathParams = field(default=None)
    query_params: DownloadCertificateQueryParams = field(default=None)
    

@dataclass
class DownloadCertificateResponse:
    content_type: str = field(default=None)
    download_certificate_200_application_json_binary_string: Optional[bytes] = field(default=None)
    status_code: int = field(default=None)
    
