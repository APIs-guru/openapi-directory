from dataclasses import dataclass, field
from typing import Any,Enum,Optional
from sdk.models import shared

class PutParameterXAmzTargetEnum(str, Enum):
    AMAZON_SSM_PUT_PARAMETER = "AmazonSSM.PutParameter"


@dataclass
class PutParameterHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm' }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256' }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential' }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date' }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token' }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature' }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders' }})
    x_amz_target: PutParameterXAmzTargetEnum = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Target' }})
    

@dataclass
class PutParameterRequest:
    headers: PutParameterHeaders = field(default=None)
    request: shared.PutParameterRequest = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PutParameterResponse:
    content_type: str = field(default=None)
    hierarchy_level_limit_exceeded_exception: Optional[Any] = field(default=None)
    hierarchy_type_mismatch_exception: Optional[Any] = field(default=None)
    incompatible_policy_exception: Optional[Any] = field(default=None)
    internal_server_error: Optional[Any] = field(default=None)
    invalid_allowed_pattern_exception: Optional[Any] = field(default=None)
    invalid_key_id: Optional[Any] = field(default=None)
    invalid_policy_attribute_exception: Optional[Any] = field(default=None)
    invalid_policy_type_exception: Optional[Any] = field(default=None)
    parameter_already_exists: Optional[Any] = field(default=None)
    parameter_limit_exceeded: Optional[Any] = field(default=None)
    parameter_max_version_limit_exceeded: Optional[Any] = field(default=None)
    parameter_pattern_mismatch_exception: Optional[Any] = field(default=None)
    policies_limit_exceeded_exception: Optional[Any] = field(default=None)
    put_parameter_result: Optional[shared.PutParameterResult] = field(default=None)
    status_code: int = field(default=None)
    too_many_updates: Optional[Any] = field(default=None)
    unsupported_parameter_type: Optional[Any] = field(default=None)
    
