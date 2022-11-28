from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from sdk.models import shared


@dataclass
class ListLensReviewImprovementsPathParams:
    lens_alias: str = field(metadata={'path_param': { 'field_name': 'LensAlias', 'style': 'simple', 'explode': False }})
    workload_id: str = field(metadata={'path_param': { 'field_name': 'WorkloadId', 'style': 'simple', 'explode': False }})
    

@dataclass
class ListLensReviewImprovementsQueryParams:
    max_results: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'MaxResults', 'style': 'form', 'explode': True }})
    milestone_number: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'MilestoneNumber', 'style': 'form', 'explode': True }})
    next_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'NextToken', 'style': 'form', 'explode': True }})
    pillar_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'PillarId', 'style': 'form', 'explode': True }})
    

@dataclass
class ListLensReviewImprovementsHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass
class ListLensReviewImprovementsRequest:
    headers: ListLensReviewImprovementsHeaders = field()
    path_params: ListLensReviewImprovementsPathParams = field()
    query_params: ListLensReviewImprovementsQueryParams = field()
    

@dataclass
class ListLensReviewImprovementsResponse:
    content_type: str = field()
    status_code: int = field()
    access_denied_exception: Optional[Any] = field(default=None)
    internal_server_exception: Optional[Any] = field(default=None)
    list_lens_review_improvements_output: Optional[shared.ListLensReviewImprovementsOutput] = field(default=None)
    resource_not_found_exception: Optional[Any] = field(default=None)
    throttling_exception: Optional[Any] = field(default=None)
    validation_exception: Optional[Any] = field(default=None)
    
