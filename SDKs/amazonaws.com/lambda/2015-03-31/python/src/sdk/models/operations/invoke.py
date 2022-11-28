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
class InvokePathParams:
    function_name: str = field(metadata={'path_param': { 'field_name': 'FunctionName', 'style': 'simple', 'explode': False }})
    

@dataclass
class InvokeQueryParams:
    qualifier: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'Qualifier', 'style': 'form', 'explode': True }})
    
class InvokeXAmzInvocationTypeEnum(str, Enum):
    EVENT = "Event"
    REQUEST_RESPONSE = "RequestResponse"
    DRY_RUN = "DryRun"

class InvokeXAmzLogTypeEnum(str, Enum):
    NONE = "None"
    TAIL = "Tail"


@dataclass
class InvokeHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_client_context: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Client-Context', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_invocation_type: Optional[InvokeXAmzInvocationTypeEnum] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Invocation-Type', 'style': 'simple', 'explode': False }})
    x_amz_log_type: Optional[InvokeXAmzLogTypeEnum] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Log-Type', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class InvokeRequestBody:
    payload: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Payload') }})
    

@dataclass
class InvokeRequest:
    headers: InvokeHeaders = field()
    path_params: InvokePathParams = field()
    query_params: InvokeQueryParams = field()
    request: InvokeRequestBody = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class InvokeResponse:
    content_type: str = field()
    status_code: int = field()
    ec2_access_denied_exception: Optional[Any] = field(default=None)
    ec2_throttled_exception: Optional[Any] = field(default=None)
    ec2_unexpected_exception: Optional[Any] = field(default=None)
    efsio_exception: Optional[Any] = field(default=None)
    efs_mount_connectivity_exception: Optional[Any] = field(default=None)
    efs_mount_failure_exception: Optional[Any] = field(default=None)
    efs_mount_timeout_exception: Optional[Any] = field(default=None)
    eni_limit_reached_exception: Optional[Any] = field(default=None)
    invalid_parameter_value_exception: Optional[Any] = field(default=None)
    invalid_request_content_exception: Optional[Any] = field(default=None)
    invalid_runtime_exception: Optional[Any] = field(default=None)
    invalid_security_group_id_exception: Optional[Any] = field(default=None)
    invalid_subnet_id_exception: Optional[Any] = field(default=None)
    invalid_zip_file_exception: Optional[Any] = field(default=None)
    invocation_response: Optional[shared.InvocationResponse] = field(default=None)
    kms_access_denied_exception: Optional[Any] = field(default=None)
    kms_disabled_exception: Optional[Any] = field(default=None)
    kms_invalid_state_exception: Optional[Any] = field(default=None)
    kms_not_found_exception: Optional[Any] = field(default=None)
    request_too_large_exception: Optional[Any] = field(default=None)
    resource_conflict_exception: Optional[Any] = field(default=None)
    resource_not_found_exception: Optional[Any] = field(default=None)
    resource_not_ready_exception: Optional[Any] = field(default=None)
    service_exception: Optional[Any] = field(default=None)
    subnet_ip_address_limit_reached_exception: Optional[Any] = field(default=None)
    too_many_requests_exception: Optional[Any] = field(default=None)
    unsupported_media_type_exception: Optional[Any] = field(default=None)
    
