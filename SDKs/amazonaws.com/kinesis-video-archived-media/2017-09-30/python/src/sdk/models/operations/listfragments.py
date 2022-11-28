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
class ListFragmentsQueryParams:
    max_results: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'MaxResults', 'style': 'form', 'explode': True }})
    next_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'NextToken', 'style': 'form', 'explode': True }})
    

@dataclass
class ListFragmentsHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class ListFragmentsRequestBodyFragmentSelector:
    r"""ListFragmentsRequestBodyFragmentSelector
    <p>Describes the timestamp range and timestamp origin of a range of fragments.</p> <p>Only fragments with a start timestamp greater than or equal to the given start time and less than or equal to the end time are returned. For example, if a stream contains fragments with the following start timestamps: </p> <ul> <li> <p>00:00:00</p> </li> <li> <p>00:00:02</p> </li> <li> <p>00:00:04</p> </li> <li> <p>00:00:06</p> </li> </ul> <p> A fragment selector range with a start time of 00:00:01 and end time of 00:00:04 would return the fragments with start times of 00:00:02 and 00:00:04. </p>
    """
    
    fragment_selector_type: Optional[shared.FragmentSelectorTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FragmentSelectorType') }})
    timestamp_range: Optional[shared.TimestampRange] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TimestampRange') }})
    

@dataclass_json
@dataclass
class ListFragmentsRequestBody:
    fragment_selector: Optional[ListFragmentsRequestBodyFragmentSelector] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FragmentSelector') }})
    max_results: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MaxResults') }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NextToken') }})
    stream_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('StreamARN') }})
    stream_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('StreamName') }})
    

@dataclass
class ListFragmentsRequest:
    headers: ListFragmentsHeaders = field()
    query_params: ListFragmentsQueryParams = field()
    request: ListFragmentsRequestBody = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class ListFragmentsResponse:
    content_type: str = field()
    status_code: int = field()
    client_limit_exceeded_exception: Optional[Any] = field(default=None)
    invalid_argument_exception: Optional[Any] = field(default=None)
    list_fragments_output: Optional[shared.ListFragmentsOutput] = field(default=None)
    not_authorized_exception: Optional[Any] = field(default=None)
    resource_not_found_exception: Optional[Any] = field(default=None)
    
