from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class CreateImportJobPathParams:
    application_id: str = field(metadata={'path_param': { 'field_name': 'application-id', 'style': 'simple', 'explode': False }})
    

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
    r"""CreateImportJobRequestBodyImportJobRequest
    Specifies the settings for a job that imports endpoint definitions from an Amazon Simple Storage Service (Amazon S3) bucket.
    """
    
    define_segment: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DefineSegment') }})
    external_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ExternalId') }})
    format: Optional[shared.FormatEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Format') }})
    register_endpoints: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RegisterEndpoints') }})
    role_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RoleArn') }})
    s3_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('S3Url') }})
    segment_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SegmentId') }})
    segment_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SegmentName') }})
    

@dataclass_json
@dataclass
class CreateImportJobRequestBody:
    import_job_request: CreateImportJobRequestBodyImportJobRequest = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ImportJobRequest') }})
    

@dataclass
class CreateImportJobRequest:
    headers: CreateImportJobHeaders = field()
    path_params: CreateImportJobPathParams = field()
    request: CreateImportJobRequestBody = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class CreateImportJobResponse:
    content_type: str = field()
    status_code: int = field()
    bad_request_exception: Optional[Any] = field(default=None)
    create_import_job_response: Optional[shared.CreateImportJobResponse] = field(default=None)
    forbidden_exception: Optional[Any] = field(default=None)
    internal_server_error_exception: Optional[Any] = field(default=None)
    method_not_allowed_exception: Optional[Any] = field(default=None)
    not_found_exception: Optional[Any] = field(default=None)
    payload_too_large_exception: Optional[Any] = field(default=None)
    too_many_requests_exception: Optional[Any] = field(default=None)
    
