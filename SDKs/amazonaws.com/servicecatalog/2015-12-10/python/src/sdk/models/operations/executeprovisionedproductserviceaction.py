from dataclasses import dataclass, field
from typing import Any,Enum,Optional
from sdk.models import shared

class ExecuteProvisionedProductServiceActionXAmzTargetEnum(str, Enum):
    AWS242_SERVICE_CATALOG_SERVICE_EXECUTE_PROVISIONED_PRODUCT_SERVICE_ACTION = "AWS242ServiceCatalogService.ExecuteProvisionedProductServiceAction"


@dataclass
class ExecuteProvisionedProductServiceActionHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm' }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256' }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential' }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date' }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token' }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature' }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders' }})
    x_amz_target: ExecuteProvisionedProductServiceActionXAmzTargetEnum = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Target' }})
    

@dataclass
class ExecuteProvisionedProductServiceActionRequest:
    headers: ExecuteProvisionedProductServiceActionHeaders = field(default=None)
    request: shared.ExecuteProvisionedProductServiceActionInput = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class ExecuteProvisionedProductServiceActionResponse:
    content_type: str = field(default=None)
    execute_provisioned_product_service_action_output: Optional[shared.ExecuteProvisionedProductServiceActionOutput] = field(default=None)
    invalid_parameters_exception: Optional[Any] = field(default=None)
    invalid_state_exception: Optional[Any] = field(default=None)
    resource_not_found_exception: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    
