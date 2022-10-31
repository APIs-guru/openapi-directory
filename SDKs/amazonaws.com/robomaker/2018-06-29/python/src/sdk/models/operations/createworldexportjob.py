from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class CreateWorldExportJobHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class CreateWorldExportJobRequestBodyOutputLocation:
    s3_bucket: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 's3Bucket' }})
    s3_prefix: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 's3Prefix' }})
    

@dataclass_json
@dataclass
class CreateWorldExportJobRequestBody:
    client_request_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'clientRequestToken' }})
    iam_role: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'iamRole' }})
    output_location: CreateWorldExportJobRequestBodyOutputLocation = field(default=None, metadata={'dataclasses_json': { 'field_name': 'outputLocation' }})
    tags: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tags' }})
    worlds: List[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'worlds' }})
    

@dataclass
class CreateWorldExportJobRequest:
    headers: CreateWorldExportJobHeaders = field(default=None)
    request: CreateWorldExportJobRequestBody = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class CreateWorldExportJobResponse:
    content_type: str = field(default=None)
    create_world_export_job_response: Optional[shared.CreateWorldExportJobResponse] = field(default=None)
    idempotent_parameter_mismatch_exception: Optional[Any] = field(default=None)
    internal_server_exception: Optional[Any] = field(default=None)
    invalid_parameter_exception: Optional[Any] = field(default=None)
    resource_not_found_exception: Optional[Any] = field(default=None)
    service_unavailable_exception: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    throttling_exception: Optional[Any] = field(default=None)
    
