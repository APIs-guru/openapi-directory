from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class TestRenderEmailTemplatePathParams:
    template_name: str = field(default=None, metadata={'path_param': { 'field_name': 'TemplateName', 'style': 'simple', 'explode': False }})
    

@dataclass
class TestRenderEmailTemplateHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class TestRenderEmailTemplateRequestBody:
    template_data: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TemplateData' }})
    

@dataclass
class TestRenderEmailTemplateRequest:
    path_params: TestRenderEmailTemplatePathParams = field(default=None)
    headers: TestRenderEmailTemplateHeaders = field(default=None)
    request: TestRenderEmailTemplateRequestBody = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class TestRenderEmailTemplateResponse:
    bad_request_exception: Optional[Any] = field(default=None)
    content_type: str = field(default=None)
    not_found_exception: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    test_render_email_template_response: Optional[shared.TestRenderEmailTemplateResponse] = field(default=None)
    too_many_requests_exception: Optional[Any] = field(default=None)
    
