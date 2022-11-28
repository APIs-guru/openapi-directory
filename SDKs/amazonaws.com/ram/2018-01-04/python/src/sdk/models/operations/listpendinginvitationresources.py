from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class ListPendingInvitationResourcesQueryParams:
    max_results: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'maxResults', 'style': 'form', 'explode': True }})
    next_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'nextToken', 'style': 'form', 'explode': True }})
    

@dataclass
class ListPendingInvitationResourcesHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class ListPendingInvitationResourcesRequestBody:
    resource_share_invitation_arn: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('resourceShareInvitationArn') }})
    max_results: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('maxResults') }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextToken') }})
    

@dataclass
class ListPendingInvitationResourcesRequest:
    headers: ListPendingInvitationResourcesHeaders = field()
    query_params: ListPendingInvitationResourcesQueryParams = field()
    request: ListPendingInvitationResourcesRequestBody = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class ListPendingInvitationResourcesResponse:
    content_type: str = field()
    status_code: int = field()
    invalid_next_token_exception: Optional[Any] = field(default=None)
    invalid_parameter_exception: Optional[Any] = field(default=None)
    list_pending_invitation_resources_response: Optional[shared.ListPendingInvitationResourcesResponse] = field(default=None)
    malformed_arn_exception: Optional[Any] = field(default=None)
    missing_required_parameter_exception: Optional[Any] = field(default=None)
    resource_share_invitation_already_rejected_exception: Optional[Any] = field(default=None)
    resource_share_invitation_arn_not_found_exception: Optional[Any] = field(default=None)
    resource_share_invitation_expired_exception: Optional[Any] = field(default=None)
    server_internal_exception: Optional[Any] = field(default=None)
    service_unavailable_exception: Optional[Any] = field(default=None)
    
