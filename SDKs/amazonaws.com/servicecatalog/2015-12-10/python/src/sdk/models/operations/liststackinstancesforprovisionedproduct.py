from dataclasses import dataclass, field
from typing import Any,Enum,List,Optional
from sdk.models import shared

class ListStackInstancesForProvisionedProductXAmzTargetEnum(str, Enum):
    AWS242_SERVICE_CATALOG_SERVICE_LIST_STACK_INSTANCES_FOR_PROVISIONED_PRODUCT = "AWS242ServiceCatalogService.ListStackInstancesForProvisionedProduct"


@dataclass
class ListStackInstancesForProvisionedProductHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    x_amz_target: ListStackInstancesForProvisionedProductXAmzTargetEnum = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    

@dataclass
class ListStackInstancesForProvisionedProductRequest:
    headers: ListStackInstancesForProvisionedProductHeaders = field(default=None)
    request: shared.ListStackInstancesForProvisionedProductInput = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class ListStackInstancesForProvisionedProductResponse:
    content_type: str = field(default=None)
    invalid_parameters_exception: Optional[Any] = field(default=None)
    list_stack_instances_for_provisioned_product_output: Optional[shared.ListStackInstancesForProvisionedProductOutput] = field(default=None)
    resource_not_found_exception: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    
