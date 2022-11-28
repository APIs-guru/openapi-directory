from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class UpdateProjectQueryParams:
    project_id: str = field(metadata={'query_param': { 'field_name': 'projectId', 'style': 'form', 'explode': True }})
    

@dataclass
class UpdateProjectHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class UpdateProjectRequestBody:
    contents: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('contents') }})
    

@dataclass
class UpdateProjectRequest:
    headers: UpdateProjectHeaders = field()
    query_params: UpdateProjectQueryParams = field()
    request: UpdateProjectRequestBody = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class UpdateProjectResponse:
    content_type: str = field()
    status_code: int = field()
    account_action_required_exception: Optional[shared.AccountActionRequiredException] = field(default=None)
    bad_request_exception: Optional[shared.BadRequestException] = field(default=None)
    internal_failure_exception: Optional[shared.InternalFailureException] = field(default=None)
    limit_exceeded_exception: Optional[shared.LimitExceededException] = field(default=None)
    not_found_exception: Optional[shared.NotFoundException] = field(default=None)
    service_unavailable_exception: Optional[shared.ServiceUnavailableException] = field(default=None)
    too_many_requests_exception: Optional[shared.TooManyRequestsException] = field(default=None)
    unauthorized_exception: Optional[shared.UnauthorizedException] = field(default=None)
    update_project_result: Optional[shared.UpdateProjectResult] = field(default=None)
    
