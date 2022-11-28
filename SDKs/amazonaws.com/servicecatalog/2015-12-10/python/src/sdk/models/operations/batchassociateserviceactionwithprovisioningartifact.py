from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from sdk.models import shared

class BatchAssociateServiceActionWithProvisioningArtifactXAmzTargetEnum(str, Enum):
    AWS242_SERVICE_CATALOG_SERVICE_BATCH_ASSOCIATE_SERVICE_ACTION_WITH_PROVISIONING_ARTIFACT = "AWS242ServiceCatalogService.BatchAssociateServiceActionWithProvisioningArtifact"


@dataclass
class BatchAssociateServiceActionWithProvisioningArtifactHeaders:
    x_amz_target: BatchAssociateServiceActionWithProvisioningArtifactXAmzTargetEnum = field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass
class BatchAssociateServiceActionWithProvisioningArtifactRequest:
    headers: BatchAssociateServiceActionWithProvisioningArtifactHeaders = field()
    request: shared.BatchAssociateServiceActionWithProvisioningArtifactInput = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class BatchAssociateServiceActionWithProvisioningArtifactResponse:
    content_type: str = field()
    status_code: int = field()
    batch_associate_service_action_with_provisioning_artifact_output: Optional[shared.BatchAssociateServiceActionWithProvisioningArtifactOutput] = field(default=None)
    invalid_parameters_exception: Optional[Any] = field(default=None)
    
