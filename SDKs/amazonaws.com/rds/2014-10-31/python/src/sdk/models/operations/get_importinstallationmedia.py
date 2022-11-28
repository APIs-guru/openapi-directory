from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum

class GetImportInstallationMediaActionEnum(str, Enum):
    IMPORT_INSTALLATION_MEDIA = "ImportInstallationMedia"

class GetImportInstallationMediaVersionEnum(str, Enum):
    TWO_THOUSAND_AND_FOURTEEN_10_31 = "2014-10-31"


@dataclass
class GetImportInstallationMediaQueryParams:
    action: GetImportInstallationMediaActionEnum = field(metadata={'query_param': { 'field_name': 'Action', 'style': 'form', 'explode': True }})
    custom_availability_zone_id: str = field(metadata={'query_param': { 'field_name': 'CustomAvailabilityZoneId', 'style': 'form', 'explode': True }})
    engine: str = field(metadata={'query_param': { 'field_name': 'Engine', 'style': 'form', 'explode': True }})
    engine_installation_media_path: str = field(metadata={'query_param': { 'field_name': 'EngineInstallationMediaPath', 'style': 'form', 'explode': True }})
    engine_version: str = field(metadata={'query_param': { 'field_name': 'EngineVersion', 'style': 'form', 'explode': True }})
    os_installation_media_path: str = field(metadata={'query_param': { 'field_name': 'OSInstallationMediaPath', 'style': 'form', 'explode': True }})
    version: GetImportInstallationMediaVersionEnum = field(metadata={'query_param': { 'field_name': 'Version', 'style': 'form', 'explode': True }})
    

@dataclass
class GetImportInstallationMediaHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetImportInstallationMediaRequest:
    headers: GetImportInstallationMediaHeaders = field()
    query_params: GetImportInstallationMediaQueryParams = field()
    

@dataclass
class GetImportInstallationMediaResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    
