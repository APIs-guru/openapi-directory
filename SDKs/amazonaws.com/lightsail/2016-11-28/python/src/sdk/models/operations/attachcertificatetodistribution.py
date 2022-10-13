from dataclasses import dataclass, field
from typing import Any,Enum,Optional
from sdk.models import shared

class AttachCertificateToDistributionXAmzTargetEnum(str, Enum):
    LIGHTSAIL_20161128_ATTACH_CERTIFICATE_TO_DISTRIBUTION = "Lightsail_20161128.AttachCertificateToDistribution"


@dataclass
class AttachCertificateToDistributionHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm' }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256' }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential' }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date' }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token' }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature' }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders' }})
    x_amz_target: AttachCertificateToDistributionXAmzTargetEnum = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Target' }})
    

@dataclass
class AttachCertificateToDistributionRequest:
    headers: AttachCertificateToDistributionHeaders = field(default=None)
    request: shared.AttachCertificateToDistributionRequest = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class AttachCertificateToDistributionResponse:
    access_denied_exception: Optional[Any] = field(default=None)
    attach_certificate_to_distribution_result: Optional[shared.AttachCertificateToDistributionResult] = field(default=None)
    content_type: str = field(default=None)
    invalid_input_exception: Optional[Any] = field(default=None)
    not_found_exception: Optional[Any] = field(default=None)
    operation_failure_exception: Optional[Any] = field(default=None)
    service_exception: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    unauthenticated_exception: Optional[Any] = field(default=None)
    
