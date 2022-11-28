from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
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
    r"""ListStreamsRequestBodyStreamNameCondition
    Specifies the condition that streams must satisfy to be returned when you list streams (see the <code>ListStreams</code> API). A condition has a comparison operation and a value. Currently, you can specify only the <code>BEGINS_WITH</code> operator, which finds streams whose names start with a given prefix. 
    """
    
    comparison_operator: Optional[shared.ComparisonOperatorEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ComparisonOperator') }})
    comparison_value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ComparisonValue') }})
    

@dataclass_json
@dataclass
class ListStreamsRequestBody:
    max_results: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MaxResults') }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NextToken') }})
    stream_name_condition: Optional[ListStreamsRequestBodyStreamNameCondition] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('StreamNameCondition') }})
    

@dataclass
class ListStreamsRequest:
    headers: ListStreamsHeaders = field()
    query_params: ListStreamsQueryParams = field()
    request: ListStreamsRequestBody = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class ListStreamsResponse:
    content_type: str = field()
    status_code: int = field()
    client_limit_exceeded_exception: Optional[Any] = field(default=None)
    invalid_argument_exception: Optional[Any] = field(default=None)
    list_streams_output: Optional[shared.ListStreamsOutput] = field(default=None)
    
