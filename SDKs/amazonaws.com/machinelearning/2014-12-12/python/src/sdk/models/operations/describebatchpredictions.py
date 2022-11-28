from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from sdk.models import shared


@dataclass
class DescribeBatchPredictionsQueryParams:
    limit: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'Limit', 'style': 'form', 'explode': True }})
    next_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'NextToken', 'style': 'form', 'explode': True }})
    
class DescribeBatchPredictionsXAmzTargetEnum(str, Enum):
    AMAZON_ML_20141212_DESCRIBE_BATCH_PREDICTIONS = "AmazonML_20141212.DescribeBatchPredictions"


@dataclass
class DescribeBatchPredictionsHeaders:
    x_amz_target: DescribeBatchPredictionsXAmzTargetEnum = field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass
class DescribeBatchPredictionsRequest:
    headers: DescribeBatchPredictionsHeaders = field()
    query_params: DescribeBatchPredictionsQueryParams = field()
    request: shared.DescribeBatchPredictionsInput = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class DescribeBatchPredictionsResponse:
    content_type: str = field()
    status_code: int = field()
    describe_batch_predictions_output: Optional[shared.DescribeBatchPredictionsOutput] = field(default=None)
    internal_server_exception: Optional[Any] = field(default=None)
    invalid_input_exception: Optional[Any] = field(default=None)
    
