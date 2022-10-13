from dataclasses import dataclass, field
from typing import Enum,Optional
from sdk.models import shared

class DescribeMyUserProfileXAmzTargetEnum(str, Enum):
    OPS_WORKS_20130218_DESCRIBE_MY_USER_PROFILE = "OpsWorks_20130218.DescribeMyUserProfile"


@dataclass
class DescribeMyUserProfileHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm' }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256' }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential' }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date' }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token' }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature' }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders' }})
    x_amz_target: DescribeMyUserProfileXAmzTargetEnum = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Target' }})
    

@dataclass
class DescribeMyUserProfileRequest:
    headers: DescribeMyUserProfileHeaders = field(default=None)
    

@dataclass
class DescribeMyUserProfileResponse:
    content_type: str = field(default=None)
    describe_my_user_profile_result: Optional[shared.DescribeMyUserProfileResult] = field(default=None)
    status_code: int = field(default=None)
    
