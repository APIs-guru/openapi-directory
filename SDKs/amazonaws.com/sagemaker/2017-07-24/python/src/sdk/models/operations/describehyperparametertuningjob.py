from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from sdk.models import shared

class DescribeHyperParameterTuningJobXAmzTargetEnum(str, Enum):
    SAGE_MAKER_DESCRIBE_HYPER_PARAMETER_TUNING_JOB = "SageMaker.DescribeHyperParameterTuningJob"


@dataclass
class DescribeHyperParameterTuningJobHeaders:
    x_amz_target: DescribeHyperParameterTuningJobXAmzTargetEnum = field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass
class DescribeHyperParameterTuningJobRequest:
    headers: DescribeHyperParameterTuningJobHeaders = field()
    request: shared.DescribeHyperParameterTuningJobRequest = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class DescribeHyperParameterTuningJobResponse:
    content_type: str = field()
    status_code: int = field()
    describe_hyper_parameter_tuning_job_response: Optional[shared.DescribeHyperParameterTuningJobResponse] = field(default=None)
    resource_not_found: Optional[Any] = field(default=None)
    
