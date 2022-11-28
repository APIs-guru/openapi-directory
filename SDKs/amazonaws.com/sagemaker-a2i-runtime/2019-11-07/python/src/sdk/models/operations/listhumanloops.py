from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from sdk.models import shared

class ListHumanLoopsSortOrderEnum(str, Enum):
    ASCENDING = "Ascending"
    DESCENDING = "Descending"


@dataclass
class ListHumanLoopsQueryParams:
    flow_definition_arn: str = field(metadata={'query_param': { 'field_name': 'FlowDefinitionArn', 'style': 'form', 'explode': True }})
    creation_time_after: Optional[datetime] = field(default=None, metadata={'query_param': { 'field_name': 'CreationTimeAfter', 'style': 'form', 'explode': True }})
    creation_time_before: Optional[datetime] = field(default=None, metadata={'query_param': { 'field_name': 'CreationTimeBefore', 'style': 'form', 'explode': True }})
    max_results: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'MaxResults', 'style': 'form', 'explode': True }})
    next_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'NextToken', 'style': 'form', 'explode': True }})
    sort_order: Optional[ListHumanLoopsSortOrderEnum] = field(default=None, metadata={'query_param': { 'field_name': 'SortOrder', 'style': 'form', 'explode': True }})
    

@dataclass
class ListHumanLoopsHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass
class ListHumanLoopsRequest:
    headers: ListHumanLoopsHeaders = field()
    query_params: ListHumanLoopsQueryParams = field()
    

@dataclass
class ListHumanLoopsResponse:
    content_type: str = field()
    status_code: int = field()
    internal_server_exception: Optional[Any] = field(default=None)
    list_human_loops_response: Optional[shared.ListHumanLoopsResponse] = field(default=None)
    resource_not_found_exception: Optional[Any] = field(default=None)
    throttling_exception: Optional[Any] = field(default=None)
    validation_exception: Optional[Any] = field(default=None)
    
