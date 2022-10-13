from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class PutEventsHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm' }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256' }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential' }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date' }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token' }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature' }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders' }})
    x_amz_client_context: str = field(default=None, metadata={'header': { 'field_name': 'x-amz-Client-Context' }})
    x_amz_client_context_encoding: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'x-amz-Client-Context-Encoding' }})
    

@dataclass_json
@dataclass
class PutEventsRequestBody:
    events: List[shared.Event] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'events' }})
    

@dataclass
class PutEventsRequest:
    headers: PutEventsHeaders = field(default=None)
    request: PutEventsRequestBody = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PutEventsResponse:
    bad_request_exception: Optional[shared.BadRequestException] = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
