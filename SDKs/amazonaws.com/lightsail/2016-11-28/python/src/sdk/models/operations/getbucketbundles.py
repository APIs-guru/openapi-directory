from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from sdk.models import shared

class GetBucketBundlesXAmzTargetEnum(str, Enum):
    LIGHTSAIL_20161128_GET_BUCKET_BUNDLES = "Lightsail_20161128.GetBucketBundles"


@dataclass
class GetBucketBundlesHeaders:
    x_amz_target: GetBucketBundlesXAmzTargetEnum = field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetBucketBundlesRequest:
    headers: GetBucketBundlesHeaders = field()
    request: shared.GetBucketBundlesRequest = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class GetBucketBundlesResponse:
    content_type: str = field()
    status_code: int = field()
    access_denied_exception: Optional[Any] = field(default=None)
    get_bucket_bundles_result: Optional[shared.GetBucketBundlesResult] = field(default=None)
    invalid_input_exception: Optional[Any] = field(default=None)
    service_exception: Optional[Any] = field(default=None)
    unauthenticated_exception: Optional[Any] = field(default=None)
    
