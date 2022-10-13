from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class CreateSimulationApplicationVersionHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm' }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256' }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential' }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date' }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token' }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature' }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders' }})
    

@dataclass_json
@dataclass
class CreateSimulationApplicationVersionRequestBody:
    application: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'application' }})
    current_revision_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'currentRevisionId' }})
    image_digest: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'imageDigest' }})
    s3_etags: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 's3Etags' }})
    

@dataclass
class CreateSimulationApplicationVersionRequest:
    headers: CreateSimulationApplicationVersionHeaders = field(default=None)
    request: CreateSimulationApplicationVersionRequestBody = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class CreateSimulationApplicationVersionResponse:
    content_type: str = field(default=None)
    create_simulation_application_version_response: Optional[shared.CreateSimulationApplicationVersionResponse] = field(default=None)
    idempotent_parameter_mismatch_exception: Optional[Any] = field(default=None)
    internal_server_exception: Optional[Any] = field(default=None)
    invalid_parameter_exception: Optional[Any] = field(default=None)
    limit_exceeded_exception: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    throttling_exception: Optional[Any] = field(default=None)
    
