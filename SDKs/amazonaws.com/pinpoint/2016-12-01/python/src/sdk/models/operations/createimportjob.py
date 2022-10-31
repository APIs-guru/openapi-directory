from dataclasses import dataclass, field
from typing import Any,Enum,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class CreateImportJobPathParams:
    application_id: str = field(default=None, metadata={'path_param': { 'field_name': 'application-id', 'style': 'simple', 'explode': False }})
    

@dataclass
class CreateImportJobHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class CreateImportJobRequestBodyImportJobRequest:
    define_segment: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DefineSegment' }})
    external_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ExternalId' }})
    format: Optional[shared.FormatEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Format' }})
    register_endpoints: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RegisterEndpoints' }})
    role_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RoleArn' }})
    s3_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'S3Url' }})
    segment_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SegmentId' }})
    segment_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SegmentName' }})
    

@dataclass_json
@dataclass
class CreateImportJobRequestBody:
    import_job_request: CreateImportJobRequestBodyImportJobRequest = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ImportJobRequest' }})
    

@dataclass
class CreateImportJobRequest:
    path_params: CreateImportJobPathParams = field(default=None)
    headers: CreateImportJobHeaders = field(default=None)
    request: CreateImportJobRequestBody = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class CreateImportJobResponse:
    bad_request_exception: Optional[Any] = field(default=None)
    content_type: str = field(default=None)
    create_import_job_response: Optional[shared.CreateImportJobResponse] = field(default=None)
    forbidden_exception: Optional[Any] = field(default=None)
    internal_server_error_exception: Optional[Any] = field(default=None)
    method_not_allowed_exception: Optional[Any] = field(default=None)
    not_found_exception: Optional[Any] = field(default=None)
    payload_too_large_exception: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    too_many_requests_exception: Optional[Any] = field(default=None)
    
