from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class AddEventSourceHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class AddEventSourceRequestBody:
    batch_size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'BatchSize' }})
    event_source: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EventSource' }})
    function_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FunctionName' }})
    parameters: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Parameters' }})
    role: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Role' }})
    

@dataclass
class AddEventSourceRequest:
    headers: AddEventSourceHeaders = field(default=None)
    request: AddEventSourceRequestBody = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class AddEventSourceResponse:
    content_type: str = field(default=None)
    event_source_configuration: Optional[shared.EventSourceConfiguration] = field(default=None)
    invalid_parameter_value_exception: Optional[shared.InvalidParameterValueException] = field(default=None)
    service_exception: Optional[shared.ServiceException] = field(default=None)
    status_code: int = field(default=None)
    
