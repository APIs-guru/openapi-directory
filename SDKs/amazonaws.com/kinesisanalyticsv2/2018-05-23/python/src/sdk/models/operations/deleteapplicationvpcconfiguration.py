from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from sdk.models import shared

class DeleteApplicationVpcConfigurationXAmzTargetEnum(str, Enum):
    KINESIS_ANALYTICS_20180523_DELETE_APPLICATION_VPC_CONFIGURATION = "KinesisAnalytics_20180523.DeleteApplicationVpcConfiguration"


@dataclass
class DeleteApplicationVpcConfigurationHeaders:
    x_amz_target: DeleteApplicationVpcConfigurationXAmzTargetEnum = field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteApplicationVpcConfigurationRequest:
    headers: DeleteApplicationVpcConfigurationHeaders = field()
    request: shared.DeleteApplicationVpcConfigurationRequest = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class DeleteApplicationVpcConfigurationResponse:
    content_type: str = field()
    status_code: int = field()
    concurrent_modification_exception: Optional[Any] = field(default=None)
    delete_application_vpc_configuration_response: Optional[shared.DeleteApplicationVpcConfigurationResponse] = field(default=None)
    invalid_application_configuration_exception: Optional[Any] = field(default=None)
    invalid_argument_exception: Optional[Any] = field(default=None)
    resource_in_use_exception: Optional[Any] = field(default=None)
    resource_not_found_exception: Optional[Any] = field(default=None)
    
