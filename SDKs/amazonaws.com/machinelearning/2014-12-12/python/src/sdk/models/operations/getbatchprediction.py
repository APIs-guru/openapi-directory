from dataclasses import dataclass, field
from typing import Any,Enum,Optional
from sdk.models import shared

class GetBatchPredictionXAmzTargetEnum(str, Enum):
    AMAZON_ML_20141212_GET_BATCH_PREDICTION = "AmazonML_20141212.GetBatchPrediction"


@dataclass
class GetBatchPredictionHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm' }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256' }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential' }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date' }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token' }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature' }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders' }})
    x_amz_target: GetBatchPredictionXAmzTargetEnum = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Target' }})
    

@dataclass
class GetBatchPredictionRequest:
    headers: GetBatchPredictionHeaders = field(default=None)
    request: shared.GetBatchPredictionInput = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class GetBatchPredictionResponse:
    content_type: str = field(default=None)
    get_batch_prediction_output: Optional[shared.GetBatchPredictionOutput] = field(default=None)
    internal_server_exception: Optional[Any] = field(default=None)
    invalid_input_exception: Optional[Any] = field(default=None)
    resource_not_found_exception: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    
