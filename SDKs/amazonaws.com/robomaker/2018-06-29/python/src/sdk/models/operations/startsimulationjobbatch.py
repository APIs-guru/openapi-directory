from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class StartSimulationJobBatchHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class StartSimulationJobBatchRequestBodyBatchPolicy:
    max_concurrency: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'maxConcurrency' }})
    timeout_in_seconds: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'timeoutInSeconds' }})
    

@dataclass_json
@dataclass
class StartSimulationJobBatchRequestBody:
    batch_policy: Optional[StartSimulationJobBatchRequestBodyBatchPolicy] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'batchPolicy' }})
    client_request_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'clientRequestToken' }})
    create_simulation_job_requests: List[shared.SimulationJobRequest] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'createSimulationJobRequests' }})
    tags: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tags' }})
    

@dataclass
class StartSimulationJobBatchRequest:
    headers: StartSimulationJobBatchHeaders = field(default=None)
    request: StartSimulationJobBatchRequestBody = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class StartSimulationJobBatchResponse:
    content_type: str = field(default=None)
    idempotent_parameter_mismatch_exception: Optional[Any] = field(default=None)
    internal_server_exception: Optional[Any] = field(default=None)
    invalid_parameter_exception: Optional[Any] = field(default=None)
    limit_exceeded_exception: Optional[Any] = field(default=None)
    start_simulation_job_batch_response: Optional[shared.StartSimulationJobBatchResponse] = field(default=None)
    status_code: int = field(default=None)
    throttling_exception: Optional[Any] = field(default=None)
    
