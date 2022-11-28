from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from sdk.models import shared

class StopHyperParameterTuningJobXAmzTargetEnum(str, Enum):
    SAGE_MAKER_STOP_HYPER_PARAMETER_TUNING_JOB = "SageMaker.StopHyperParameterTuningJob"


@dataclass
class StopHyperParameterTuningJobHeaders:
    x_amz_target: StopHyperParameterTuningJobXAmzTargetEnum = field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass
class StopHyperParameterTuningJobRequest:
    headers: StopHyperParameterTuningJobHeaders = field()
    request: shared.StopHyperParameterTuningJobRequest = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class StopHyperParameterTuningJobResponse:
    content_type: str = field()
    status_code: int = field()
    resource_not_found: Optional[Any] = field(default=None)
    
