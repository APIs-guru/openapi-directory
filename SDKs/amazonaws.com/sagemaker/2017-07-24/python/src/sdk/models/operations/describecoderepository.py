from dataclasses import dataclass, field
from typing import Enum,Optional
from sdk.models import shared

class DescribeCodeRepositoryXAmzTargetEnum(str, Enum):
    SAGE_MAKER_DESCRIBE_CODE_REPOSITORY = "SageMaker.DescribeCodeRepository"


@dataclass
class DescribeCodeRepositoryHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    x_amz_target: DescribeCodeRepositoryXAmzTargetEnum = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    

@dataclass
class DescribeCodeRepositoryRequest:
    headers: DescribeCodeRepositoryHeaders = field(default=None)
    request: shared.DescribeCodeRepositoryInput = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class DescribeCodeRepositoryResponse:
    content_type: str = field(default=None)
    describe_code_repository_output: Optional[shared.DescribeCodeRepositoryOutput] = field(default=None)
    status_code: int = field(default=None)
    
