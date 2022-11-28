from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from sdk.models import shared


@dataclass
class ListTrainingJobsForHyperParameterTuningJobQueryParams:
    max_results: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'MaxResults', 'style': 'form', 'explode': True }})
    next_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'NextToken', 'style': 'form', 'explode': True }})
    
class ListTrainingJobsForHyperParameterTuningJobXAmzTargetEnum(str, Enum):
    SAGE_MAKER_LIST_TRAINING_JOBS_FOR_HYPER_PARAMETER_TUNING_JOB = "SageMaker.ListTrainingJobsForHyperParameterTuningJob"


@dataclass
class ListTrainingJobsForHyperParameterTuningJobHeaders:
    x_amz_target: ListTrainingJobsForHyperParameterTuningJobXAmzTargetEnum = field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass
class ListTrainingJobsForHyperParameterTuningJobRequest:
    headers: ListTrainingJobsForHyperParameterTuningJobHeaders = field()
    query_params: ListTrainingJobsForHyperParameterTuningJobQueryParams = field()
    request: shared.ListTrainingJobsForHyperParameterTuningJobRequest = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class ListTrainingJobsForHyperParameterTuningJobResponse:
    content_type: str = field()
    status_code: int = field()
    list_training_jobs_for_hyper_parameter_tuning_job_response: Optional[shared.ListTrainingJobsForHyperParameterTuningJobResponse] = field(default=None)
    resource_not_found: Optional[Any] = field(default=None)
    
