from dataclasses import dataclass, field
from typing import Any,Enum,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class CreateExportHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm' }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256' }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential' }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date' }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token' }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature' }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders' }})
    
class CreateExportRequestBodyFileFormatEnum(str, Enum):
    LEX_JSON = "LexJson"


@dataclass_json
@dataclass
class CreateExportRequestBodyResourceSpecification:
    bot_export_specification: Optional[shared.BotExportSpecification] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'botExportSpecification' }})
    bot_locale_export_specification: Optional[shared.BotLocaleExportSpecification] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'botLocaleExportSpecification' }})
    

@dataclass_json
@dataclass
class CreateExportRequestBody:
    file_format: CreateExportRequestBodyFileFormatEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fileFormat' }})
    file_password: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'filePassword' }})
    resource_specification: CreateExportRequestBodyResourceSpecification = field(default=None, metadata={'dataclasses_json': { 'field_name': 'resourceSpecification' }})
    

@dataclass
class CreateExportRequest:
    headers: CreateExportHeaders = field(default=None)
    request: CreateExportRequestBody = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class CreateExportResponse:
    conflict_exception: Optional[Any] = field(default=None)
    content_type: str = field(default=None)
    create_export_response: Optional[shared.CreateExportResponse] = field(default=None)
    internal_server_exception: Optional[Any] = field(default=None)
    resource_not_found_exception: Optional[Any] = field(default=None)
    service_quota_exceeded_exception: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    throttling_exception: Optional[Any] = field(default=None)
    validation_exception: Optional[Any] = field(default=None)
    
