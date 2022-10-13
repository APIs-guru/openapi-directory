from dataclasses import dataclass, field
from typing import Any,Enum,Optional
from sdk.models import shared

class AddApplicationOutputXAmzTargetEnum(str, Enum):
    KINESIS_ANALYTICS_20150814_ADD_APPLICATION_OUTPUT = "KinesisAnalytics_20150814.AddApplicationOutput"


@dataclass
class AddApplicationOutputHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm' }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256' }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential' }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date' }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token' }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature' }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders' }})
    x_amz_target: AddApplicationOutputXAmzTargetEnum = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Target' }})
    

@dataclass
class AddApplicationOutputRequest:
    headers: AddApplicationOutputHeaders = field(default=None)
    request: shared.AddApplicationOutputRequest = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class AddApplicationOutputResponse:
    add_application_output_response: Optional[dict[str, Any]] = field(default=None)
    concurrent_modification_exception: Optional[Any] = field(default=None)
    content_type: str = field(default=None)
    invalid_argument_exception: Optional[Any] = field(default=None)
    resource_in_use_exception: Optional[Any] = field(default=None)
    resource_not_found_exception: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    unsupported_operation_exception: Optional[Any] = field(default=None)
    
