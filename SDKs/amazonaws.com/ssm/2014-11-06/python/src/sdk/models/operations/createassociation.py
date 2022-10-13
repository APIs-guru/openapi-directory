from dataclasses import dataclass, field
from typing import Any,Enum,Optional
from sdk.models import shared

class CreateAssociationXAmzTargetEnum(str, Enum):
    AMAZON_SSM_CREATE_ASSOCIATION = "AmazonSSM.CreateAssociation"


@dataclass
class CreateAssociationHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm' }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256' }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential' }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date' }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token' }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature' }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders' }})
    x_amz_target: CreateAssociationXAmzTargetEnum = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Target' }})
    

@dataclass
class CreateAssociationRequest:
    headers: CreateAssociationHeaders = field(default=None)
    request: shared.CreateAssociationRequest = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class CreateAssociationResponse:
    association_already_exists: Optional[Any] = field(default=None)
    association_limit_exceeded: Optional[Any] = field(default=None)
    content_type: str = field(default=None)
    create_association_result: Optional[shared.CreateAssociationResult] = field(default=None)
    internal_server_error: Optional[Any] = field(default=None)
    invalid_document: Optional[Any] = field(default=None)
    invalid_document_version: Optional[Any] = field(default=None)
    invalid_instance_id: Optional[Any] = field(default=None)
    invalid_output_location: Optional[Any] = field(default=None)
    invalid_parameters: Optional[Any] = field(default=None)
    invalid_schedule: Optional[Any] = field(default=None)
    invalid_target: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    unsupported_platform_type: Optional[Any] = field(default=None)
    
