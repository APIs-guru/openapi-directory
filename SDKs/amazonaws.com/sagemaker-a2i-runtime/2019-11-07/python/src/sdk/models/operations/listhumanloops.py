from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Enum,List,Optional
from sdk.models import shared

class ListHumanLoopsSortOrderEnum(str, Enum):
    ASCENDING = "Ascending"
    DESCENDING = "Descending"


@dataclass
class ListHumanLoopsQueryParams:
    creation_time_after: Optional[datetime] = field(default=None, metadata={'query_param': { 'field_name': 'CreationTimeAfter', 'style': 'form', 'explode': True }})
    creation_time_before: Optional[datetime] = field(default=None, metadata={'query_param': { 'field_name': 'CreationTimeBefore', 'style': 'form', 'explode': True }})
    flow_definition_arn: str = field(default=None, metadata={'query_param': { 'field_name': 'FlowDefinitionArn', 'style': 'form', 'explode': True }})
    max_results: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'MaxResults', 'style': 'form', 'explode': True }})
    next_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'NextToken', 'style': 'form', 'explode': True }})
    sort_order: Optional[ListHumanLoopsSortOrderEnum] = field(default=None, metadata={'query_param': { 'field_name': 'SortOrder', 'style': 'form', 'explode': True }})
    

@dataclass
class ListHumanLoopsHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm' }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256' }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential' }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date' }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token' }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature' }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders' }})
    

@dataclass
class ListHumanLoopsRequest:
    query_params: ListHumanLoopsQueryParams = field(default=None)
    headers: ListHumanLoopsHeaders = field(default=None)
    

@dataclass
class ListHumanLoopsResponse:
    content_type: str = field(default=None)
    internal_server_exception: Optional[Any] = field(default=None)
    list_human_loops_response: Optional[shared.ListHumanLoopsResponse] = field(default=None)
    resource_not_found_exception: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    throttling_exception: Optional[Any] = field(default=None)
    validation_exception: Optional[Any] = field(default=None)
    
