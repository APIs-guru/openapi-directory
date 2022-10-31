from dataclasses import dataclass, field
from typing import Any,Enum,Optional
from sdk.models import shared

class DisassociateServiceActionFromProvisioningArtifactXAmzTargetEnum(str, Enum):
    AWS242_SERVICE_CATALOG_SERVICE_DISASSOCIATE_SERVICE_ACTION_FROM_PROVISIONING_ARTIFACT = "AWS242ServiceCatalogService.DisassociateServiceActionFromProvisioningArtifact"


@dataclass
class DisassociateServiceActionFromProvisioningArtifactHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    x_amz_target: DisassociateServiceActionFromProvisioningArtifactXAmzTargetEnum = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    

@dataclass
class DisassociateServiceActionFromProvisioningArtifactRequest:
    headers: DisassociateServiceActionFromProvisioningArtifactHeaders = field(default=None)
    request: shared.DisassociateServiceActionFromProvisioningArtifactInput = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class DisassociateServiceActionFromProvisioningArtifactResponse:
    content_type: str = field(default=None)
    disassociate_service_action_from_provisioning_artifact_output: Optional[dict[str, Any]] = field(default=None)
    resource_not_found_exception: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    
