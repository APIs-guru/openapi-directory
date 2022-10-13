from dataclasses import dataclass, field
from typing import Any,Enum,Optional
from sdk.models import shared

class CreateReturnShippingLabelXAmzTargetEnum(str, Enum):
    AWSIE_SNOWBALL_JOB_MANAGEMENT_SERVICE_CREATE_RETURN_SHIPPING_LABEL = "AWSIESnowballJobManagementService.CreateReturnShippingLabel"


@dataclass
class CreateReturnShippingLabelHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm' }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256' }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential' }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date' }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token' }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature' }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders' }})
    x_amz_target: CreateReturnShippingLabelXAmzTargetEnum = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Target' }})
    

@dataclass
class CreateReturnShippingLabelRequest:
    headers: CreateReturnShippingLabelHeaders = field(default=None)
    request: shared.CreateReturnShippingLabelRequest = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class CreateReturnShippingLabelResponse:
    conflict_exception: Optional[Any] = field(default=None)
    content_type: str = field(default=None)
    create_return_shipping_label_result: Optional[shared.CreateReturnShippingLabelResult] = field(default=None)
    invalid_input_combination_exception: Optional[Any] = field(default=None)
    invalid_job_state_exception: Optional[Any] = field(default=None)
    invalid_resource_exception: Optional[Any] = field(default=None)
    return_shipping_label_already_exists_exception: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    
