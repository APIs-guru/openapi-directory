from dataclasses import dataclass, field
from typing import Any,Enum,List,Optional
from sdk.models import shared


@dataclass
class ListProvisioningArtifactsForServiceActionQueryParams:
    page_size: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'PageSize', 'style': 'form', 'explode': True }})
    page_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'PageToken', 'style': 'form', 'explode': True }})
    
class ListProvisioningArtifactsForServiceActionXAmzTargetEnum(str, Enum):
    AWS242_SERVICE_CATALOG_SERVICE_LIST_PROVISIONING_ARTIFACTS_FOR_SERVICE_ACTION = "AWS242ServiceCatalogService.ListProvisioningArtifactsForServiceAction"


@dataclass
class ListProvisioningArtifactsForServiceActionHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm' }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256' }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential' }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date' }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token' }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature' }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders' }})
    x_amz_target: ListProvisioningArtifactsForServiceActionXAmzTargetEnum = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Target' }})
    

@dataclass
class ListProvisioningArtifactsForServiceActionRequest:
    query_params: ListProvisioningArtifactsForServiceActionQueryParams = field(default=None)
    headers: ListProvisioningArtifactsForServiceActionHeaders = field(default=None)
    request: shared.ListProvisioningArtifactsForServiceActionInput = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class ListProvisioningArtifactsForServiceActionResponse:
    content_type: str = field(default=None)
    invalid_parameters_exception: Optional[Any] = field(default=None)
    list_provisioning_artifacts_for_service_action_output: Optional[shared.ListProvisioningArtifactsForServiceActionOutput] = field(default=None)
    resource_not_found_exception: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    
