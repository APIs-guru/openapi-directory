from dataclasses import dataclass, field
from typing import Any,Enum,List,Optional
from sdk.models import shared


@dataclass
class ListReviewPolicyResultsForHitQueryParams:
    max_results: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'MaxResults', 'style': 'form', 'explode': True }})
    next_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'NextToken', 'style': 'form', 'explode': True }})
    
class ListReviewPolicyResultsForHitxAmzTargetEnum(str, Enum):
    M_TURK_REQUESTER_SERVICE_V20170117_LIST_REVIEW_POLICY_RESULTS_FOR_HIT = "MTurkRequesterServiceV20170117.ListReviewPolicyResultsForHIT"


@dataclass
class ListReviewPolicyResultsForHitHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm' }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256' }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential' }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date' }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token' }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature' }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders' }})
    x_amz_target: ListReviewPolicyResultsForHitxAmzTargetEnum = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Target' }})
    

@dataclass
class ListReviewPolicyResultsForHitRequest:
    query_params: ListReviewPolicyResultsForHitQueryParams = field(default=None)
    headers: ListReviewPolicyResultsForHitHeaders = field(default=None)
    request: shared.ListReviewPolicyResultsForHitRequest = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class ListReviewPolicyResultsForHitResponse:
    content_type: str = field(default=None)
    list_review_policy_results_for_hit_response: Optional[shared.ListReviewPolicyResultsForHitResponse] = field(default=None)
    request_error: Optional[Any] = field(default=None)
    service_fault: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    
