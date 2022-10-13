from dataclasses import dataclass, field
from typing import Any,Enum,Optional
from sdk.models import shared


@dataclass
class GetProvisionedProductOutputsQueryParams:
    page_size: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'PageSize', 'style': 'form', 'explode': True }})
    page_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'PageToken', 'style': 'form', 'explode': True }})
    
class GetProvisionedProductOutputsXAmzTargetEnum(str, Enum):
    AWS242_SERVICE_CATALOG_SERVICE_GET_PROVISIONED_PRODUCT_OUTPUTS = "AWS242ServiceCatalogService.GetProvisionedProductOutputs"


@dataclass
class GetProvisionedProductOutputsHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm' }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256' }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential' }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date' }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token' }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature' }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders' }})
    x_amz_target: GetProvisionedProductOutputsXAmzTargetEnum = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Target' }})
    

@dataclass
class GetProvisionedProductOutputsRequest:
    query_params: GetProvisionedProductOutputsQueryParams = field(default=None)
    headers: GetProvisionedProductOutputsHeaders = field(default=None)
    request: shared.GetProvisionedProductOutputsInput = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class GetProvisionedProductOutputsResponse:
    content_type: str = field(default=None)
    get_provisioned_product_outputs_output: Optional[shared.GetProvisionedProductOutputsOutput] = field(default=None)
    invalid_parameters_exception: Optional[Any] = field(default=None)
    resource_not_found_exception: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    
