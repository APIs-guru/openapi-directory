from dataclasses import dataclass, field
from typing import Any,Enum,List,Optional
from sdk.models import shared


@dataclass
class ListTrainingJobsForHyperParameterTuningJobQueryParams:
    max_results: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'MaxResults', 'style': 'form', 'explode': True }})
    next_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'NextToken', 'style': 'form', 'explode': True }})
    
class ListTrainingJobsForHyperParameterTuningJobXAmzTargetEnum(str, Enum):
    SAGE_MAKER_LIST_TRAINING_JOBS_FOR_HYPER_PARAMETER_TUNING_JOB = "SageMaker.ListTrainingJobsForHyperParameterTuningJob"


@dataclass
class ListTrainingJobsForHyperParameterTuningJobHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm' }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256' }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential' }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date' }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token' }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature' }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders' }})
    x_amz_target: ListTrainingJobsForHyperParameterTuningJobXAmzTargetEnum = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Target' }})
    

@dataclass
class ListTrainingJobsForHyperParameterTuningJobRequest:
    query_params: ListTrainingJobsForHyperParameterTuningJobQueryParams = field(default=None)
    headers: ListTrainingJobsForHyperParameterTuningJobHeaders = field(default=None)
    request: shared.ListTrainingJobsForHyperParameterTuningJobRequest = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class ListTrainingJobsForHyperParameterTuningJobResponse:
    content_type: str = field(default=None)
    list_training_jobs_for_hyper_parameter_tuning_job_response: Optional[shared.ListTrainingJobsForHyperParameterTuningJobResponse] = field(default=None)
    resource_not_found: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    
