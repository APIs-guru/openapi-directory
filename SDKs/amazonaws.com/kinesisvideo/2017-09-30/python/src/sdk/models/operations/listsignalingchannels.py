from dataclasses import dataclass, field
from typing import Any,Enum,List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class ListSignalingChannelsQueryParams:
    max_results: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'MaxResults', 'style': 'form', 'explode': True }})
    next_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'NextToken', 'style': 'form', 'explode': True }})
    

@dataclass
class ListSignalingChannelsHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm' }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256' }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential' }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date' }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token' }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature' }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders' }})
    

@dataclass_json
@dataclass
class ListSignalingChannelsRequestBodyChannelNameCondition:
    comparison_operator: Optional[shared.ComparisonOperatorEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ComparisonOperator' }})
    comparison_value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ComparisonValue' }})
    

@dataclass_json
@dataclass
class ListSignalingChannelsRequestBody:
    channel_name_condition: Optional[ListSignalingChannelsRequestBodyChannelNameCondition] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ChannelNameCondition' }})
    max_results: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MaxResults' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextToken' }})
    

@dataclass
class ListSignalingChannelsRequest:
    query_params: ListSignalingChannelsQueryParams = field(default=None)
    headers: ListSignalingChannelsHeaders = field(default=None)
    request: ListSignalingChannelsRequestBody = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class ListSignalingChannelsResponse:
    access_denied_exception: Optional[Any] = field(default=None)
    client_limit_exceeded_exception: Optional[Any] = field(default=None)
    content_type: str = field(default=None)
    invalid_argument_exception: Optional[Any] = field(default=None)
    list_signaling_channels_output: Optional[shared.ListSignalingChannelsOutput] = field(default=None)
    status_code: int = field(default=None)
    
