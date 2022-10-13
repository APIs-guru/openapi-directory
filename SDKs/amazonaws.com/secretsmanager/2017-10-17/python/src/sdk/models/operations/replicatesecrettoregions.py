from dataclasses import dataclass, field
from typing import Any,Enum,Optional
from sdk.models import shared

class ReplicateSecretToRegionsXAmzTargetEnum(str, Enum):
    SECRETSMANAGER_REPLICATE_SECRET_TO_REGIONS = "secretsmanager.ReplicateSecretToRegions"


@dataclass
class ReplicateSecretToRegionsHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm' }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256' }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential' }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date' }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token' }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature' }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders' }})
    x_amz_target: ReplicateSecretToRegionsXAmzTargetEnum = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Target' }})
    

@dataclass
class ReplicateSecretToRegionsRequest:
    headers: ReplicateSecretToRegionsHeaders = field(default=None)
    request: shared.ReplicateSecretToRegionsRequest = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class ReplicateSecretToRegionsResponse:
    content_type: str = field(default=None)
    internal_service_error: Optional[Any] = field(default=None)
    invalid_parameter_exception: Optional[Any] = field(default=None)
    invalid_request_exception: Optional[Any] = field(default=None)
    replicate_secret_to_regions_response: Optional[shared.ReplicateSecretToRegionsResponse] = field(default=None)
    resource_not_found_exception: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    
