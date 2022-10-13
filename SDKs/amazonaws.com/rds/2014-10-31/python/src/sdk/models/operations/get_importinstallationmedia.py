from dataclasses import dataclass, field
from typing import Enum,Optional

class GetImportInstallationMediaActionEnum(str, Enum):
    IMPORT_INSTALLATION_MEDIA = "ImportInstallationMedia"

class GetImportInstallationMediaVersionEnum(str, Enum):
    TWO_THOUSAND_AND_FOURTEEN_10_31 = "2014-10-31"


@dataclass
class GetImportInstallationMediaQueryParams:
    action: GetImportInstallationMediaActionEnum = field(default=None, metadata={'query_param': { 'field_name': 'Action', 'style': 'form', 'explode': True }})
    custom_availability_zone_id: str = field(default=None, metadata={'query_param': { 'field_name': 'CustomAvailabilityZoneId', 'style': 'form', 'explode': True }})
    engine: str = field(default=None, metadata={'query_param': { 'field_name': 'Engine', 'style': 'form', 'explode': True }})
    engine_installation_media_path: str = field(default=None, metadata={'query_param': { 'field_name': 'EngineInstallationMediaPath', 'style': 'form', 'explode': True }})
    engine_version: str = field(default=None, metadata={'query_param': { 'field_name': 'EngineVersion', 'style': 'form', 'explode': True }})
    os_installation_media_path: str = field(default=None, metadata={'query_param': { 'field_name': 'OSInstallationMediaPath', 'style': 'form', 'explode': True }})
    version: GetImportInstallationMediaVersionEnum = field(default=None, metadata={'query_param': { 'field_name': 'Version', 'style': 'form', 'explode': True }})
    

@dataclass
class GetImportInstallationMediaHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm' }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256' }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential' }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date' }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token' }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature' }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders' }})
    

@dataclass
class GetImportInstallationMediaRequest:
    query_params: GetImportInstallationMediaQueryParams = field(default=None)
    headers: GetImportInstallationMediaHeaders = field(default=None)
    

@dataclass
class GetImportInstallationMediaResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
