from dataclasses import dataclass, field
from typing import Any,Enum,Optional
from sdk.models import shared

class UpdateAssociationXAmzTargetEnum(str, Enum):
    AMAZON_SSM_UPDATE_ASSOCIATION = "AmazonSSM.UpdateAssociation"


@dataclass
class UpdateAssociationHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    x_amz_target: UpdateAssociationXAmzTargetEnum = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateAssociationRequest:
    headers: UpdateAssociationHeaders = field(default=None)
    request: shared.UpdateAssociationRequest = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class UpdateAssociationResponse:
    association_does_not_exist: Optional[Any] = field(default=None)
    association_version_limit_exceeded: Optional[Any] = field(default=None)
    content_type: str = field(default=None)
    internal_server_error: Optional[Any] = field(default=None)
    invalid_association_version: Optional[Any] = field(default=None)
    invalid_document: Optional[Any] = field(default=None)
    invalid_document_version: Optional[Any] = field(default=None)
    invalid_output_location: Optional[Any] = field(default=None)
    invalid_parameters: Optional[Any] = field(default=None)
    invalid_schedule: Optional[Any] = field(default=None)
    invalid_target: Optional[Any] = field(default=None)
    invalid_update: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    too_many_updates: Optional[Any] = field(default=None)
    update_association_result: Optional[shared.UpdateAssociationResult] = field(default=None)
    
