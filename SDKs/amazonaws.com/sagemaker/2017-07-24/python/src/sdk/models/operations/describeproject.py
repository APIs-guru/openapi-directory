from dataclasses import dataclass, field
from typing import Enum,Optional
from sdk.models import shared

class DescribeProjectXAmzTargetEnum(str, Enum):
    SAGE_MAKER_DESCRIBE_PROJECT = "SageMaker.DescribeProject"


@dataclass
class DescribeProjectHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm' }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256' }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential' }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date' }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token' }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature' }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders' }})
    x_amz_target: DescribeProjectXAmzTargetEnum = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Target' }})
    

@dataclass
class DescribeProjectRequest:
    headers: DescribeProjectHeaders = field(default=None)
    request: shared.DescribeProjectInput = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class DescribeProjectResponse:
    content_type: str = field(default=None)
    describe_project_output: Optional[shared.DescribeProjectOutput] = field(default=None)
    status_code: int = field(default=None)
    
