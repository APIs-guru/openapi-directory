from dataclasses import dataclass, field
from typing import Any,Enum,Optional
from sdk.models import shared

class CreateSizeConstraintSetXAmzTargetEnum(str, Enum):
    AWSWAF_REGIONAL_20161128_CREATE_SIZE_CONSTRAINT_SET = "AWSWAF_Regional_20161128.CreateSizeConstraintSet"


@dataclass
class CreateSizeConstraintSetHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm' }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256' }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential' }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date' }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token' }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature' }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders' }})
    x_amz_target: CreateSizeConstraintSetXAmzTargetEnum = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Target' }})
    

@dataclass
class CreateSizeConstraintSetRequest:
    headers: CreateSizeConstraintSetHeaders = field(default=None)
    request: shared.CreateSizeConstraintSetRequest = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class CreateSizeConstraintSetResponse:
    content_type: str = field(default=None)
    create_size_constraint_set_response: Optional[shared.CreateSizeConstraintSetResponse] = field(default=None)
    status_code: int = field(default=None)
    waf_disallowed_name_exception: Optional[Any] = field(default=None)
    waf_internal_error_exception: Optional[Any] = field(default=None)
    waf_invalid_account_exception: Optional[Any] = field(default=None)
    waf_invalid_parameter_exception: Optional[Any] = field(default=None)
    waf_limits_exceeded_exception: Optional[Any] = field(default=None)
    waf_stale_data_exception: Optional[Any] = field(default=None)
    
