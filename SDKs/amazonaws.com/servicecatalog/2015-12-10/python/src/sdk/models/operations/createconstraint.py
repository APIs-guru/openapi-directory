from dataclasses import dataclass, field
from typing import Any,Enum,Optional
from sdk.models import shared

class CreateConstraintXAmzTargetEnum(str, Enum):
    AWS242_SERVICE_CATALOG_SERVICE_CREATE_CONSTRAINT = "AWS242ServiceCatalogService.CreateConstraint"


@dataclass
class CreateConstraintHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm' }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256' }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential' }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date' }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token' }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature' }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders' }})
    x_amz_target: CreateConstraintXAmzTargetEnum = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Target' }})
    

@dataclass
class CreateConstraintRequest:
    headers: CreateConstraintHeaders = field(default=None)
    request: shared.CreateConstraintInput = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class CreateConstraintResponse:
    content_type: str = field(default=None)
    create_constraint_output: Optional[shared.CreateConstraintOutput] = field(default=None)
    duplicate_resource_exception: Optional[Any] = field(default=None)
    invalid_parameters_exception: Optional[Any] = field(default=None)
    limit_exceeded_exception: Optional[Any] = field(default=None)
    resource_not_found_exception: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    
