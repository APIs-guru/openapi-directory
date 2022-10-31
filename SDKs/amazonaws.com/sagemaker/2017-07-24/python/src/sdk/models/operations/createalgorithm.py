from dataclasses import dataclass, field
from typing import Enum,Optional
from sdk.models import shared

class CreateAlgorithmXAmzTargetEnum(str, Enum):
    SAGE_MAKER_CREATE_ALGORITHM = "SageMaker.CreateAlgorithm"


@dataclass
class CreateAlgorithmHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    x_amz_target: CreateAlgorithmXAmzTargetEnum = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    

@dataclass
class CreateAlgorithmRequest:
    headers: CreateAlgorithmHeaders = field(default=None)
    request: shared.CreateAlgorithmInput = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class CreateAlgorithmResponse:
    content_type: str = field(default=None)
    create_algorithm_output: Optional[shared.CreateAlgorithmOutput] = field(default=None)
    status_code: int = field(default=None)
    
