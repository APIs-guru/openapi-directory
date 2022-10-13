from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class CreateExportJobPathParams:
    application_id: str = field(default=None, metadata={'path_param': { 'field_name': 'application-id', 'style': 'simple', 'explode': False }})
    

@dataclass
class CreateExportJobHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm' }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256' }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential' }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date' }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token' }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature' }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders' }})
    

@dataclass_json
@dataclass
class CreateExportJobRequestBodyExportJobRequest:
    role_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RoleArn' }})
    s3_url_prefix: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'S3UrlPrefix' }})
    segment_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SegmentId' }})
    segment_version: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SegmentVersion' }})
    

@dataclass_json
@dataclass
class CreateExportJobRequestBody:
    export_job_request: CreateExportJobRequestBodyExportJobRequest = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ExportJobRequest' }})
    

@dataclass
class CreateExportJobRequest:
    path_params: CreateExportJobPathParams = field(default=None)
    headers: CreateExportJobHeaders = field(default=None)
    request: CreateExportJobRequestBody = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class CreateExportJobResponse:
    bad_request_exception: Optional[Any] = field(default=None)
    content_type: str = field(default=None)
    create_export_job_response: Optional[shared.CreateExportJobResponse] = field(default=None)
    forbidden_exception: Optional[Any] = field(default=None)
    internal_server_error_exception: Optional[Any] = field(default=None)
    method_not_allowed_exception: Optional[Any] = field(default=None)
    not_found_exception: Optional[Any] = field(default=None)
    payload_too_large_exception: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    too_many_requests_exception: Optional[Any] = field(default=None)
    
