from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from sdk.models import shared

class AddApplicationCloudWatchLoggingOptionXAmzTargetEnum(str, Enum):
    KINESIS_ANALYTICS_20150814_ADD_APPLICATION_CLOUD_WATCH_LOGGING_OPTION = "KinesisAnalytics_20150814.AddApplicationCloudWatchLoggingOption"


@dataclass
class AddApplicationCloudWatchLoggingOptionHeaders:
    x_amz_target: AddApplicationCloudWatchLoggingOptionXAmzTargetEnum = field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass
class AddApplicationCloudWatchLoggingOptionRequest:
    headers: AddApplicationCloudWatchLoggingOptionHeaders = field()
    request: shared.AddApplicationCloudWatchLoggingOptionRequest = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class AddApplicationCloudWatchLoggingOptionResponse:
    content_type: str = field()
    status_code: int = field()
    add_application_cloud_watch_logging_option_response: Optional[dict[str, Any]] = field(default=None)
    concurrent_modification_exception: Optional[Any] = field(default=None)
    invalid_argument_exception: Optional[Any] = field(default=None)
    resource_in_use_exception: Optional[Any] = field(default=None)
    resource_not_found_exception: Optional[Any] = field(default=None)
    unsupported_operation_exception: Optional[Any] = field(default=None)
    
