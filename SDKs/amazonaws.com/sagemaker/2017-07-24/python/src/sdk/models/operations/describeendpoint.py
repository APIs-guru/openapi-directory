from dataclasses import dataclass, field
from typing import Enum,Optional
from sdk.models import shared

class DescribeEndpointXAmzTargetEnum(str, Enum):
    SAGE_MAKER_DESCRIBE_ENDPOINT = "SageMaker.DescribeEndpoint"


@dataclass
class DescribeEndpointHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm' }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256' }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential' }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date' }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token' }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature' }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders' }})
    x_amz_target: DescribeEndpointXAmzTargetEnum = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Target' }})
    

@dataclass
class DescribeEndpointRequest:
    headers: DescribeEndpointHeaders = field(default=None)
    request: shared.DescribeEndpointInput = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class DescribeEndpointResponse:
    content_type: str = field(default=None)
    describe_endpoint_output: Optional[shared.DescribeEndpointOutput] = field(default=None)
    status_code: int = field(default=None)
    
