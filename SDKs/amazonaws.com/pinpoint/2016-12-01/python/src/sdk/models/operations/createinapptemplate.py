from dataclasses import dataclass, field
from typing import Any,Enum,List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class CreateInAppTemplatePathParams:
    template_name: str = field(default=None, metadata={'path_param': { 'field_name': 'template-name', 'style': 'simple', 'explode': False }})
    

@dataclass
class CreateInAppTemplateHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class CreateInAppTemplateRequestBodyInAppTemplateRequest:
    content: Optional[List[shared.InAppMessageContent]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Content' }})
    custom_config: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CustomConfig' }})
    layout: Optional[shared.LayoutEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Layout' }})
    template_description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TemplateDescription' }})
    tags: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tags' }})
    

@dataclass_json
@dataclass
class CreateInAppTemplateRequestBody:
    in_app_template_request: CreateInAppTemplateRequestBodyInAppTemplateRequest = field(default=None, metadata={'dataclasses_json': { 'field_name': 'InAppTemplateRequest' }})
    

@dataclass
class CreateInAppTemplateRequest:
    path_params: CreateInAppTemplatePathParams = field(default=None)
    headers: CreateInAppTemplateHeaders = field(default=None)
    request: CreateInAppTemplateRequestBody = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class CreateInAppTemplateResponse:
    bad_request_exception: Optional[Any] = field(default=None)
    content_type: str = field(default=None)
    create_in_app_template_response: Optional[shared.CreateInAppTemplateResponse] = field(default=None)
    forbidden_exception: Optional[Any] = field(default=None)
    internal_server_error_exception: Optional[Any] = field(default=None)
    method_not_allowed_exception: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    too_many_requests_exception: Optional[Any] = field(default=None)
    
