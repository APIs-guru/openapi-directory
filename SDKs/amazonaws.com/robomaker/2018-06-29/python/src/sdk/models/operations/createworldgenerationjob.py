from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class CreateWorldGenerationJobHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm' }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256' }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential' }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date' }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token' }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature' }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders' }})
    

@dataclass_json
@dataclass
class CreateWorldGenerationJobRequestBodyWorldCount:
    floorplan_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'floorplanCount' }})
    interior_count_per_floorplan: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'interiorCountPerFloorplan' }})
    

@dataclass_json
@dataclass
class CreateWorldGenerationJobRequestBody:
    client_request_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'clientRequestToken' }})
    tags: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tags' }})
    template: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'template' }})
    world_count: CreateWorldGenerationJobRequestBodyWorldCount = field(default=None, metadata={'dataclasses_json': { 'field_name': 'worldCount' }})
    world_tags: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'worldTags' }})
    

@dataclass
class CreateWorldGenerationJobRequest:
    headers: CreateWorldGenerationJobHeaders = field(default=None)
    request: CreateWorldGenerationJobRequestBody = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class CreateWorldGenerationJobResponse:
    content_type: str = field(default=None)
    create_world_generation_job_response: Optional[shared.CreateWorldGenerationJobResponse] = field(default=None)
    idempotent_parameter_mismatch_exception: Optional[Any] = field(default=None)
    internal_server_exception: Optional[Any] = field(default=None)
    invalid_parameter_exception: Optional[Any] = field(default=None)
    limit_exceeded_exception: Optional[Any] = field(default=None)
    resource_not_found_exception: Optional[Any] = field(default=None)
    service_unavailable_exception: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    throttling_exception: Optional[Any] = field(default=None)
    
