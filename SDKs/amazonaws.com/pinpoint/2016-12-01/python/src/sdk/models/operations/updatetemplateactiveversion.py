from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class UpdateTemplateActiveVersionPathParams:
    template_name: str = field(default=None, metadata={'path_param': { 'field_name': 'template-name', 'style': 'simple', 'explode': False }})
    template_type: str = field(default=None, metadata={'path_param': { 'field_name': 'template-type', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateTemplateActiveVersionHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm' }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256' }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential' }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date' }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token' }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature' }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders' }})
    

@dataclass_json
@dataclass
class UpdateTemplateActiveVersionRequestBodyTemplateActiveVersionRequest:
    version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Version' }})
    

@dataclass_json
@dataclass
class UpdateTemplateActiveVersionRequestBody:
    template_active_version_request: UpdateTemplateActiveVersionRequestBodyTemplateActiveVersionRequest = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TemplateActiveVersionRequest' }})
    

@dataclass
class UpdateTemplateActiveVersionRequest:
    path_params: UpdateTemplateActiveVersionPathParams = field(default=None)
    headers: UpdateTemplateActiveVersionHeaders = field(default=None)
    request: UpdateTemplateActiveVersionRequestBody = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class UpdateTemplateActiveVersionResponse:
    bad_request_exception: Optional[Any] = field(default=None)
    content_type: str = field(default=None)
    forbidden_exception: Optional[Any] = field(default=None)
    internal_server_error_exception: Optional[Any] = field(default=None)
    method_not_allowed_exception: Optional[Any] = field(default=None)
    not_found_exception: Optional[Any] = field(default=None)
    payload_too_large_exception: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    too_many_requests_exception: Optional[Any] = field(default=None)
    update_template_active_version_response: Optional[shared.UpdateTemplateActiveVersionResponse] = field(default=None)
    
