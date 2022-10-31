from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class DeleteCustomVerificationEmailTemplatePathParams:
    template_name: str = field(default=None, metadata={'path_param': { 'field_name': 'TemplateName', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteCustomVerificationEmailTemplateHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteCustomVerificationEmailTemplateRequest:
    path_params: DeleteCustomVerificationEmailTemplatePathParams = field(default=None)
    headers: DeleteCustomVerificationEmailTemplateHeaders = field(default=None)
    

@dataclass
class DeleteCustomVerificationEmailTemplateResponse:
    bad_request_exception: Optional[Any] = field(default=None)
    content_type: str = field(default=None)
    delete_custom_verification_email_template_response: Optional[dict[str, Any]] = field(default=None)
    not_found_exception: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    too_many_requests_exception: Optional[Any] = field(default=None)
    
