from dataclasses import dataclass, field
from typing import Enum,Optional
from sdk.models import shared

class DescribeOperatingSystemsXAmzTargetEnum(str, Enum):
    OPS_WORKS_20130218_DESCRIBE_OPERATING_SYSTEMS = "OpsWorks_20130218.DescribeOperatingSystems"


@dataclass
class DescribeOperatingSystemsHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm' }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256' }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential' }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date' }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token' }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature' }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders' }})
    x_amz_target: DescribeOperatingSystemsXAmzTargetEnum = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Target' }})
    

@dataclass
class DescribeOperatingSystemsRequest:
    headers: DescribeOperatingSystemsHeaders = field(default=None)
    

@dataclass
class DescribeOperatingSystemsResponse:
    content_type: str = field(default=None)
    describe_operating_systems_response: Optional[shared.DescribeOperatingSystemsResponse] = field(default=None)
    status_code: int = field(default=None)
    
