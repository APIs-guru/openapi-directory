from dataclasses import dataclass, field
from typing import Any,Enum,Optional
from sdk.models import shared

class DescribeHyperParameterTuningJobXAmzTargetEnum(str, Enum):
    SAGE_MAKER_DESCRIBE_HYPER_PARAMETER_TUNING_JOB = "SageMaker.DescribeHyperParameterTuningJob"


@dataclass
class DescribeHyperParameterTuningJobHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm' }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256' }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential' }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date' }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token' }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature' }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders' }})
    x_amz_target: DescribeHyperParameterTuningJobXAmzTargetEnum = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Target' }})
    

@dataclass
class DescribeHyperParameterTuningJobRequest:
    headers: DescribeHyperParameterTuningJobHeaders = field(default=None)
    request: shared.DescribeHyperParameterTuningJobRequest = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class DescribeHyperParameterTuningJobResponse:
    content_type: str = field(default=None)
    describe_hyper_parameter_tuning_job_response: Optional[shared.DescribeHyperParameterTuningJobResponse] = field(default=None)
    resource_not_found: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    
