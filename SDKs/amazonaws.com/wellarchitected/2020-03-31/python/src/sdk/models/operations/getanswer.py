from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class GetAnswerPathParams:
    lens_alias: str = field(default=None, metadata={'path_param': { 'field_name': 'LensAlias', 'style': 'simple', 'explode': False }})
    question_id: str = field(default=None, metadata={'path_param': { 'field_name': 'QuestionId', 'style': 'simple', 'explode': False }})
    workload_id: str = field(default=None, metadata={'path_param': { 'field_name': 'WorkloadId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetAnswerQueryParams:
    milestone_number: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'MilestoneNumber', 'style': 'form', 'explode': True }})
    

@dataclass
class GetAnswerHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetAnswerRequest:
    path_params: GetAnswerPathParams = field(default=None)
    query_params: GetAnswerQueryParams = field(default=None)
    headers: GetAnswerHeaders = field(default=None)
    

@dataclass
class GetAnswerResponse:
    access_denied_exception: Optional[Any] = field(default=None)
    content_type: str = field(default=None)
    get_answer_output: Optional[shared.GetAnswerOutput] = field(default=None)
    internal_server_exception: Optional[Any] = field(default=None)
    resource_not_found_exception: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    throttling_exception: Optional[Any] = field(default=None)
    validation_exception: Optional[Any] = field(default=None)
    
