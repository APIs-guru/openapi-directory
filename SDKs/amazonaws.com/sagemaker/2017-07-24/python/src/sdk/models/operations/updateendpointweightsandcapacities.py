from dataclasses import dataclass, field
from typing import Any,Enum,Optional
from sdk.models import shared

class UpdateEndpointWeightsAndCapacitiesXAmzTargetEnum(str, Enum):
    SAGE_MAKER_UPDATE_ENDPOINT_WEIGHTS_AND_CAPACITIES = "SageMaker.UpdateEndpointWeightsAndCapacities"


@dataclass
class UpdateEndpointWeightsAndCapacitiesHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm' }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256' }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential' }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date' }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token' }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature' }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders' }})
    x_amz_target: UpdateEndpointWeightsAndCapacitiesXAmzTargetEnum = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Target' }})
    

@dataclass
class UpdateEndpointWeightsAndCapacitiesRequest:
    headers: UpdateEndpointWeightsAndCapacitiesHeaders = field(default=None)
    request: shared.UpdateEndpointWeightsAndCapacitiesInput = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class UpdateEndpointWeightsAndCapacitiesResponse:
    content_type: str = field(default=None)
    resource_limit_exceeded: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    update_endpoint_weights_and_capacities_output: Optional[shared.UpdateEndpointWeightsAndCapacitiesOutput] = field(default=None)
    
