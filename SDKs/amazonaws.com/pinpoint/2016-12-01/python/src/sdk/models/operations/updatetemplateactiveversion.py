from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class UpdateTemplateActiveVersionPathParams:
    template_name: str = field(metadata={'path_param': { 'field_name': 'template-name', 'style': 'simple', 'explode': False }})
    template_type: str = field(metadata={'path_param': { 'field_name': 'template-type', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateTemplateActiveVersionHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class UpdateTemplateActiveVersionRequestBodyTemplateActiveVersionRequest:
    r"""UpdateTemplateActiveVersionRequestBodyTemplateActiveVersionRequest
    Specifies which version of a message template to use as the active version of the template.
    """
    
    version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Version') }})
    

@dataclass_json
@dataclass
class UpdateTemplateActiveVersionRequestBody:
    template_active_version_request: UpdateTemplateActiveVersionRequestBodyTemplateActiveVersionRequest = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('TemplateActiveVersionRequest') }})
    

@dataclass
class UpdateTemplateActiveVersionRequest:
    headers: UpdateTemplateActiveVersionHeaders = field()
    path_params: UpdateTemplateActiveVersionPathParams = field()
    request: UpdateTemplateActiveVersionRequestBody = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class UpdateTemplateActiveVersionResponse:
    content_type: str = field()
    status_code: int = field()
    bad_request_exception: Optional[Any] = field(default=None)
    forbidden_exception: Optional[Any] = field(default=None)
    internal_server_error_exception: Optional[Any] = field(default=None)
    method_not_allowed_exception: Optional[Any] = field(default=None)
    not_found_exception: Optional[Any] = field(default=None)
    payload_too_large_exception: Optional[Any] = field(default=None)
    too_many_requests_exception: Optional[Any] = field(default=None)
    update_template_active_version_response: Optional[shared.UpdateTemplateActiveVersionResponse] = field(default=None)
    
