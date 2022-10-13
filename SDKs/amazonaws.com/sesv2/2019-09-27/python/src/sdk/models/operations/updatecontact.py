from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class UpdateContactPathParams:
    contact_list_name: str = field(default=None, metadata={'path_param': { 'field_name': 'ContactListName', 'style': 'simple', 'explode': False }})
    email_address: str = field(default=None, metadata={'path_param': { 'field_name': 'EmailAddress', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateContactHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm' }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256' }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential' }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date' }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token' }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature' }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders' }})
    

@dataclass_json
@dataclass
class UpdateContactRequestBody:
    attributes_data: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AttributesData' }})
    topic_preferences: Optional[List[shared.TopicPreference]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TopicPreferences' }})
    unsubscribe_all: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'UnsubscribeAll' }})
    

@dataclass
class UpdateContactRequest:
    path_params: UpdateContactPathParams = field(default=None)
    headers: UpdateContactHeaders = field(default=None)
    request: UpdateContactRequestBody = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class UpdateContactResponse:
    bad_request_exception: Optional[Any] = field(default=None)
    concurrent_modification_exception: Optional[Any] = field(default=None)
    content_type: str = field(default=None)
    not_found_exception: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    too_many_requests_exception: Optional[Any] = field(default=None)
    update_contact_response: Optional[dict[str, Any]] = field(default=None)
    
