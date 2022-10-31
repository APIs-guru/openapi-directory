from dataclasses import dataclass, field
from typing import Any,Enum,List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class ListStreamsQueryParams:
    max_results: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'MaxResults', 'style': 'form', 'explode': True }})
    next_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'NextToken', 'style': 'form', 'explode': True }})
    

@dataclass
class ListStreamsHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class ListStreamsRequestBodyStreamNameCondition:
    comparison_operator: Optional[shared.ComparisonOperatorEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ComparisonOperator' }})
    comparison_value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ComparisonValue' }})
    

@dataclass_json
@dataclass
class ListStreamsRequestBody:
    max_results: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MaxResults' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextToken' }})
    stream_name_condition: Optional[ListStreamsRequestBodyStreamNameCondition] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'StreamNameCondition' }})
    

@dataclass
class ListStreamsRequest:
    query_params: ListStreamsQueryParams = field(default=None)
    headers: ListStreamsHeaders = field(default=None)
    request: ListStreamsRequestBody = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class ListStreamsResponse:
    client_limit_exceeded_exception: Optional[Any] = field(default=None)
    content_type: str = field(default=None)
    invalid_argument_exception: Optional[Any] = field(default=None)
    list_streams_output: Optional[shared.ListStreamsOutput] = field(default=None)
    status_code: int = field(default=None)
    
