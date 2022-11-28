from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from sdk.models import shared

class UpdateEndpointWeightsAndCapacitiesXAmzTargetEnum(str, Enum):
    SAGE_MAKER_UPDATE_ENDPOINT_WEIGHTS_AND_CAPACITIES = "SageMaker.UpdateEndpointWeightsAndCapacities"


@dataclass
class UpdateEndpointWeightsAndCapacitiesHeaders:
    x_amz_target: UpdateEndpointWeightsAndCapacitiesXAmzTargetEnum = field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateEndpointWeightsAndCapacitiesRequest:
    headers: UpdateEndpointWeightsAndCapacitiesHeaders = field()
    request: shared.UpdateEndpointWeightsAndCapacitiesInput = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class UpdateEndpointWeightsAndCapacitiesResponse:
    content_type: str = field()
    status_code: int = field()
    resource_limit_exceeded: Optional[Any] = field(default=None)
    update_endpoint_weights_and_capacities_output: Optional[shared.UpdateEndpointWeightsAndCapacitiesOutput] = field(default=None)
    
