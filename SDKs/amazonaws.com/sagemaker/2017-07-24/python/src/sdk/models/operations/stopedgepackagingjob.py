from dataclasses import dataclass, field
from typing import Enum,Optional
from sdk.models import shared

class StopEdgePackagingJobXAmzTargetEnum(str, Enum):
    SAGE_MAKER_STOP_EDGE_PACKAGING_JOB = "SageMaker.StopEdgePackagingJob"


@dataclass
class StopEdgePackagingJobHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm' }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256' }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential' }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date' }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token' }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature' }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders' }})
    x_amz_target: StopEdgePackagingJobXAmzTargetEnum = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Target' }})
    

@dataclass
class StopEdgePackagingJobRequest:
    headers: StopEdgePackagingJobHeaders = field(default=None)
    request: shared.StopEdgePackagingJobRequest = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class StopEdgePackagingJobResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
