from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from sdk.models import shared


@dataclass
class ListLabelingJobsForWorkteamQueryParams:
    max_results: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'MaxResults', 'style': 'form', 'explode': True }})
    next_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'NextToken', 'style': 'form', 'explode': True }})
    
class ListLabelingJobsForWorkteamXAmzTargetEnum(str, Enum):
    SAGE_MAKER_LIST_LABELING_JOBS_FOR_WORKTEAM = "SageMaker.ListLabelingJobsForWorkteam"


@dataclass
class ListLabelingJobsForWorkteamHeaders:
    x_amz_target: ListLabelingJobsForWorkteamXAmzTargetEnum = field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass
class ListLabelingJobsForWorkteamRequest:
    headers: ListLabelingJobsForWorkteamHeaders = field()
    query_params: ListLabelingJobsForWorkteamQueryParams = field()
    request: shared.ListLabelingJobsForWorkteamRequest = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class ListLabelingJobsForWorkteamResponse:
    content_type: str = field()
    status_code: int = field()
    list_labeling_jobs_for_workteam_response: Optional[shared.ListLabelingJobsForWorkteamResponse] = field(default=None)
    resource_not_found: Optional[Any] = field(default=None)
    
