from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class CreateContactPathParams:
    contact_list_name: str = field(default=None, metadata={'path_param': { 'field_name': 'ContactListName', 'style': 'simple', 'explode': False }})
    

@dataclass
class CreateContactHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class CreateContactRequestBody:
    attributes_data: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AttributesData' }})
    email_address: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EmailAddress' }})
    topic_preferences: Optional[List[shared.TopicPreference]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TopicPreferences' }})
    unsubscribe_all: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'UnsubscribeAll' }})
    

@dataclass
class CreateContactRequest:
    path_params: CreateContactPathParams = field(default=None)
    headers: CreateContactHeaders = field(default=None)
    request: CreateContactRequestBody = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class CreateContactResponse:
    already_exists_exception: Optional[Any] = field(default=None)
    bad_request_exception: Optional[Any] = field(default=None)
    content_type: str = field(default=None)
    create_contact_response: Optional[dict[str, Any]] = field(default=None)
    not_found_exception: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    too_many_requests_exception: Optional[Any] = field(default=None)
    
