from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from sdk.models import shared


@dataclass
class DownloadCertificatePathParams:
    sha1_fingerprint: str = field(metadata={'path_param': { 'field_name': 'sha1Fingerprint', 'style': 'simple', 'explode': False }})
    

@dataclass
class DownloadCertificateQueryParams:
    file_format: shared.SslCertificateFileFormatEnum = field(metadata={'query_param': { 'field_name': 'file_format', 'style': 'form', 'explode': True }})
    password: str = field(metadata={'query_param': { 'field_name': 'password', 'style': 'form', 'explode': True }})
    sha1_fingerprint: str = field(metadata={'query_param': { 'field_name': 'sha1_fingerprint', 'style': 'form', 'explode': True }})
    

@dataclass
class DownloadCertificateRequest:
    path_params: DownloadCertificatePathParams = field()
    query_params: DownloadCertificateQueryParams = field()
    

@dataclass
class DownloadCertificateResponse:
    content_type: str = field()
    status_code: int = field()
    download_certificate_200_application_json_binary_string: Optional[bytes] = field(default=None)
    
