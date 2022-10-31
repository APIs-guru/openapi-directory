from dataclasses import dataclass, field
from typing import Any,Enum,List,Optional
from sdk.models import shared


@dataclass
class ListStreamsQueryParams:
    exclusive_start_stream_name: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'ExclusiveStartStreamName', 'style': 'form', 'explode': True }})
    limit: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'Limit', 'style': 'form', 'explode': True }})
    
class ListStreamsXAmzTargetEnum(str, Enum):
    KINESIS_20131202_LIST_STREAMS = "Kinesis_20131202.ListStreams"


@dataclass
class ListStreamsHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    x_amz_target: ListStreamsXAmzTargetEnum = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    

@dataclass
class ListStreamsRequest:
    query_params: ListStreamsQueryParams = field(default=None)
    headers: ListStreamsHeaders = field(default=None)
    request: shared.ListStreamsInput = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class ListStreamsResponse:
    content_type: str = field(default=None)
    limit_exceeded_exception: Optional[Any] = field(default=None)
    list_streams_output: Optional[shared.ListStreamsOutput] = field(default=None)
    status_code: int = field(default=None)
    
