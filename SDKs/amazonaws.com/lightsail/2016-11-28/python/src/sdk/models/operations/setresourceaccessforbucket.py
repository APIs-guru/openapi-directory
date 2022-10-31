from dataclasses import dataclass, field
from typing import Any,Enum,Optional
from sdk.models import shared

class SetResourceAccessForBucketXAmzTargetEnum(str, Enum):
    LIGHTSAIL_20161128_SET_RESOURCE_ACCESS_FOR_BUCKET = "Lightsail_20161128.SetResourceAccessForBucket"


@dataclass
class SetResourceAccessForBucketHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    x_amz_target: SetResourceAccessForBucketXAmzTargetEnum = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    

@dataclass
class SetResourceAccessForBucketRequest:
    headers: SetResourceAccessForBucketHeaders = field(default=None)
    request: shared.SetResourceAccessForBucketRequest = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class SetResourceAccessForBucketResponse:
    access_denied_exception: Optional[Any] = field(default=None)
    content_type: str = field(default=None)
    invalid_input_exception: Optional[Any] = field(default=None)
    not_found_exception: Optional[Any] = field(default=None)
    service_exception: Optional[Any] = field(default=None)
    set_resource_access_for_bucket_result: Optional[shared.SetResourceAccessForBucketResult] = field(default=None)
    status_code: int = field(default=None)
    unauthenticated_exception: Optional[Any] = field(default=None)
    
