from dataclasses import dataclass, field
from typing import Any,Enum,Optional
from sdk.models import shared

class GetJobManifestXAmzTargetEnum(str, Enum):
    AWSIE_SNOWBALL_JOB_MANAGEMENT_SERVICE_GET_JOB_MANIFEST = "AWSIESnowballJobManagementService.GetJobManifest"


@dataclass
class GetJobManifestHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm' }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256' }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential' }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date' }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token' }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature' }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders' }})
    x_amz_target: GetJobManifestXAmzTargetEnum = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Target' }})
    

@dataclass
class GetJobManifestRequest:
    headers: GetJobManifestHeaders = field(default=None)
    request: shared.GetJobManifestRequest = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class GetJobManifestResponse:
    content_type: str = field(default=None)
    get_job_manifest_result: Optional[shared.GetJobManifestResult] = field(default=None)
    invalid_job_state_exception: Optional[Any] = field(default=None)
    invalid_resource_exception: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    
