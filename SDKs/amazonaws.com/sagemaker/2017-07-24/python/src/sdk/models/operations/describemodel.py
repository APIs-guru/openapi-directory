from dataclasses import dataclass, field
from typing import Enum,Optional
from sdk.models import shared

class DescribeModelXAmzTargetEnum(str, Enum):
    SAGE_MAKER_DESCRIBE_MODEL = "SageMaker.DescribeModel"


@dataclass
class DescribeModelHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm' }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256' }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential' }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date' }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token' }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature' }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders' }})
    x_amz_target: DescribeModelXAmzTargetEnum = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Target' }})
    

@dataclass
class DescribeModelRequest:
    headers: DescribeModelHeaders = field(default=None)
    request: shared.DescribeModelInput = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class DescribeModelResponse:
    content_type: str = field(default=None)
    describe_model_output: Optional[shared.DescribeModelOutput] = field(default=None)
    status_code: int = field(default=None)
    
