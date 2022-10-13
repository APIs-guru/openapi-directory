from dataclasses import dataclass, field
from typing import Enum,Optional
from sdk.models import shared

class UpdateCodeRepositoryXAmzTargetEnum(str, Enum):
    SAGE_MAKER_UPDATE_CODE_REPOSITORY = "SageMaker.UpdateCodeRepository"


@dataclass
class UpdateCodeRepositoryHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm' }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256' }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential' }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date' }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token' }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature' }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders' }})
    x_amz_target: UpdateCodeRepositoryXAmzTargetEnum = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Target' }})
    

@dataclass
class UpdateCodeRepositoryRequest:
    headers: UpdateCodeRepositoryHeaders = field(default=None)
    request: shared.UpdateCodeRepositoryInput = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class UpdateCodeRepositoryResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    update_code_repository_output: Optional[shared.UpdateCodeRepositoryOutput] = field(default=None)
    
