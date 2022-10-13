from dataclasses import dataclass, field
from typing import Any,Enum,Optional
from sdk.models import shared

class GetExportExportTypeEnum(str, Enum):
    ALEXA_SKILLS_KIT = "ALEXA_SKILLS_KIT"
    LEX = "LEX"

class GetExportResourceTypeEnum(str, Enum):
    BOT = "BOT"
    INTENT = "INTENT"
    SLOT_TYPE = "SLOT_TYPE"


@dataclass
class GetExportQueryParams:
    export_type: GetExportExportTypeEnum = field(default=None, metadata={'query_param': { 'field_name': 'exportType', 'style': 'form', 'explode': True }})
    name: str = field(default=None, metadata={'query_param': { 'field_name': 'name', 'style': 'form', 'explode': True }})
    resource_type: GetExportResourceTypeEnum = field(default=None, metadata={'query_param': { 'field_name': 'resourceType', 'style': 'form', 'explode': True }})
    version: str = field(default=None, metadata={'query_param': { 'field_name': 'version', 'style': 'form', 'explode': True }})
    

@dataclass
class GetExportHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm' }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256' }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential' }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date' }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token' }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature' }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders' }})
    

@dataclass
class GetExportRequest:
    query_params: GetExportQueryParams = field(default=None)
    headers: GetExportHeaders = field(default=None)
    

@dataclass
class GetExportResponse:
    bad_request_exception: Optional[Any] = field(default=None)
    content_type: str = field(default=None)
    get_export_response: Optional[shared.GetExportResponse] = field(default=None)
    internal_failure_exception: Optional[Any] = field(default=None)
    limit_exceeded_exception: Optional[Any] = field(default=None)
    not_found_exception: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    
