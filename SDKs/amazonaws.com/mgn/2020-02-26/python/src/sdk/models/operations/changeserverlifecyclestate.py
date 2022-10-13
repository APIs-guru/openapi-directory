from dataclasses import dataclass, field
from typing import Any,Enum,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class ChangeServerLifeCycleStateHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm' }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256' }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential' }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date' }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token' }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature' }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders' }})
    

@dataclass_json
@dataclass
class ChangeServerLifeCycleStateRequestBodyLifeCycle:
    state: Optional[shared.ChangeServerLifeCycleStateSourceServerLifecycleStateEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'state' }})
    

@dataclass_json
@dataclass
class ChangeServerLifeCycleStateRequestBody:
    life_cycle: ChangeServerLifeCycleStateRequestBodyLifeCycle = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lifeCycle' }})
    source_server_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sourceServerID' }})
    

@dataclass
class ChangeServerLifeCycleStateRequest:
    headers: ChangeServerLifeCycleStateHeaders = field(default=None)
    request: ChangeServerLifeCycleStateRequestBody = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class ChangeServerLifeCycleStateResponse:
    conflict_exception: Optional[Any] = field(default=None)
    content_type: str = field(default=None)
    resource_not_found_exception: Optional[Any] = field(default=None)
    source_server: Optional[shared.SourceServer] = field(default=None)
    status_code: int = field(default=None)
    uninitialized_account_exception: Optional[Any] = field(default=None)
    validation_exception: Optional[Any] = field(default=None)
    
