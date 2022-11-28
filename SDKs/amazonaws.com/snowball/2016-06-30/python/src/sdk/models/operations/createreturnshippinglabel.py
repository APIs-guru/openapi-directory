from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from sdk.models import shared

class CreateReturnShippingLabelXAmzTargetEnum(str, Enum):
    AWSIE_SNOWBALL_JOB_MANAGEMENT_SERVICE_CREATE_RETURN_SHIPPING_LABEL = "AWSIESnowballJobManagementService.CreateReturnShippingLabel"


@dataclass
class CreateReturnShippingLabelHeaders:
    x_amz_target: CreateReturnShippingLabelXAmzTargetEnum = field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass
class CreateReturnShippingLabelRequest:
    headers: CreateReturnShippingLabelHeaders = field()
    request: shared.CreateReturnShippingLabelRequest = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class CreateReturnShippingLabelResponse:
    content_type: str = field()
    status_code: int = field()
    conflict_exception: Optional[Any] = field(default=None)
    create_return_shipping_label_result: Optional[shared.CreateReturnShippingLabelResult] = field(default=None)
    invalid_input_combination_exception: Optional[Any] = field(default=None)
    invalid_job_state_exception: Optional[Any] = field(default=None)
    invalid_resource_exception: Optional[Any] = field(default=None)
    return_shipping_label_already_exists_exception: Optional[Any] = field(default=None)
    
