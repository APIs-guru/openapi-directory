from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from sdk.models import shared

class ListCompatibleImagesXAmzTargetEnum(str, Enum):
    AWSIE_SNOWBALL_JOB_MANAGEMENT_SERVICE_LIST_COMPATIBLE_IMAGES = "AWSIESnowballJobManagementService.ListCompatibleImages"


@dataclass
class ListCompatibleImagesHeaders:
    x_amz_target: ListCompatibleImagesXAmzTargetEnum = field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass
class ListCompatibleImagesRequest:
    headers: ListCompatibleImagesHeaders = field()
    request: shared.ListCompatibleImagesRequest = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class ListCompatibleImagesResponse:
    content_type: str = field()
    status_code: int = field()
    ec2_request_failed_exception: Optional[Any] = field(default=None)
    invalid_next_token_exception: Optional[Any] = field(default=None)
    list_compatible_images_result: Optional[shared.ListCompatibleImagesResult] = field(default=None)
    
