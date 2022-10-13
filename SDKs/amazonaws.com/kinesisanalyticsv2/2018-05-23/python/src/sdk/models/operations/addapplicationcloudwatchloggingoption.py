from dataclasses import dataclass, field
from typing import Any,Enum,Optional
from sdk.models import shared

class AddApplicationCloudWatchLoggingOptionXAmzTargetEnum(str, Enum):
    KINESIS_ANALYTICS_20180523_ADD_APPLICATION_CLOUD_WATCH_LOGGING_OPTION = "KinesisAnalytics_20180523.AddApplicationCloudWatchLoggingOption"


@dataclass
class AddApplicationCloudWatchLoggingOptionHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm' }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256' }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential' }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date' }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token' }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature' }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders' }})
    x_amz_target: AddApplicationCloudWatchLoggingOptionXAmzTargetEnum = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Target' }})
    

@dataclass
class AddApplicationCloudWatchLoggingOptionRequest:
    headers: AddApplicationCloudWatchLoggingOptionHeaders = field(default=None)
    request: shared.AddApplicationCloudWatchLoggingOptionRequest = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class AddApplicationCloudWatchLoggingOptionResponse:
    add_application_cloud_watch_logging_option_response: Optional[shared.AddApplicationCloudWatchLoggingOptionResponse] = field(default=None)
    concurrent_modification_exception: Optional[Any] = field(default=None)
    content_type: str = field(default=None)
    invalid_application_configuration_exception: Optional[Any] = field(default=None)
    invalid_argument_exception: Optional[Any] = field(default=None)
    invalid_request_exception: Optional[Any] = field(default=None)
    resource_in_use_exception: Optional[Any] = field(default=None)
    resource_not_found_exception: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    
