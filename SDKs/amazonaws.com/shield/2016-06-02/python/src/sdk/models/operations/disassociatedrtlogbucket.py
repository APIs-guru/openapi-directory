from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from sdk.models import shared

class DisassociateDrtLogBucketXAmzTargetEnum(str, Enum):
    AWS_SHIELD_20160616_DISASSOCIATE_DRT_LOG_BUCKET = "AWSShield_20160616.DisassociateDRTLogBucket"


@dataclass
class DisassociateDrtLogBucketHeaders:
    x_amz_target: DisassociateDrtLogBucketXAmzTargetEnum = field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass
class DisassociateDrtLogBucketRequest:
    headers: DisassociateDrtLogBucketHeaders = field()
    request: shared.DisassociateDrtLogBucketRequest = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class DisassociateDrtLogBucketResponse:
    content_type: str = field()
    status_code: int = field()
    access_denied_for_dependency_exception: Optional[Any] = field(default=None)
    disassociate_drt_log_bucket_response: Optional[dict[str, Any]] = field(default=None)
    internal_error_exception: Optional[Any] = field(default=None)
    invalid_operation_exception: Optional[Any] = field(default=None)
    no_associated_role_exception: Optional[Any] = field(default=None)
    optimistic_lock_exception: Optional[Any] = field(default=None)
    resource_not_found_exception: Optional[Any] = field(default=None)
    
