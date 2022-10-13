from dataclasses import dataclass, field
from typing import Any,Enum,Optional
from sdk.models import shared

class DescribeTimeBasedAutoScalingXAmzTargetEnum(str, Enum):
    OPS_WORKS_20130218_DESCRIBE_TIME_BASED_AUTO_SCALING = "OpsWorks_20130218.DescribeTimeBasedAutoScaling"


@dataclass
class DescribeTimeBasedAutoScalingHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm' }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256' }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential' }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date' }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token' }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature' }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders' }})
    x_amz_target: DescribeTimeBasedAutoScalingXAmzTargetEnum = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Target' }})
    

@dataclass
class DescribeTimeBasedAutoScalingRequest:
    headers: DescribeTimeBasedAutoScalingHeaders = field(default=None)
    request: shared.DescribeTimeBasedAutoScalingRequest = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class DescribeTimeBasedAutoScalingResponse:
    content_type: str = field(default=None)
    describe_time_based_auto_scaling_result: Optional[shared.DescribeTimeBasedAutoScalingResult] = field(default=None)
    resource_not_found_exception: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    validation_exception: Optional[Any] = field(default=None)
    
