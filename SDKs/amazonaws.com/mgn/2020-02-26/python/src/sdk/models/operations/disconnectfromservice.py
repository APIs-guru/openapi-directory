from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class DisconnectFromServiceHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class DisconnectFromServiceRequestBody:
    source_server_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sourceServerID' }})
    

@dataclass
class DisconnectFromServiceRequest:
    headers: DisconnectFromServiceHeaders = field(default=None)
    request: DisconnectFromServiceRequestBody = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class DisconnectFromServiceResponse:
    conflict_exception: Optional[Any] = field(default=None)
    content_type: str = field(default=None)
    resource_not_found_exception: Optional[Any] = field(default=None)
    source_server: Optional[shared.SourceServer] = field(default=None)
    status_code: int = field(default=None)
    uninitialized_account_exception: Optional[Any] = field(default=None)
    
