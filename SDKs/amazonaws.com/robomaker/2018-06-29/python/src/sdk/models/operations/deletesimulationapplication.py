from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json


@dataclass
class DeleteSimulationApplicationHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class DeleteSimulationApplicationRequestBody:
    application: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'application' }})
    application_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'applicationVersion' }})
    

@dataclass
class DeleteSimulationApplicationRequest:
    headers: DeleteSimulationApplicationHeaders = field(default=None)
    request: DeleteSimulationApplicationRequestBody = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class DeleteSimulationApplicationResponse:
    content_type: str = field(default=None)
    delete_simulation_application_response: Optional[dict[str, Any]] = field(default=None)
    internal_server_exception: Optional[Any] = field(default=None)
    invalid_parameter_exception: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    throttling_exception: Optional[Any] = field(default=None)
    
