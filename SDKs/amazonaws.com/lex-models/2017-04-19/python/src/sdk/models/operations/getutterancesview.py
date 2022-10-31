from dataclasses import dataclass, field
from typing import Any,Enum,List,Optional
from sdk.models import shared


@dataclass
class GetUtterancesViewPathParams:
    botname: str = field(default=None, metadata={'path_param': { 'field_name': 'botname', 'style': 'simple', 'explode': False }})
    
class GetUtterancesViewStatusTypeEnum(str, Enum):
    DETECTED = "Detected"
    MISSED = "Missed"

class GetUtterancesViewViewEnum(str, Enum):
    AGGREGATION = "aggregation"


@dataclass
class GetUtterancesViewQueryParams:
    bot_versions: List[str] = field(default=None, metadata={'query_param': { 'field_name': 'bot_versions', 'style': 'form', 'explode': True }})
    status_type: GetUtterancesViewStatusTypeEnum = field(default=None, metadata={'query_param': { 'field_name': 'status_type', 'style': 'form', 'explode': True }})
    view: GetUtterancesViewViewEnum = field(default=None, metadata={'query_param': { 'field_name': 'view', 'style': 'form', 'explode': True }})
    

@dataclass
class GetUtterancesViewHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetUtterancesViewRequest:
    path_params: GetUtterancesViewPathParams = field(default=None)
    query_params: GetUtterancesViewQueryParams = field(default=None)
    headers: GetUtterancesViewHeaders = field(default=None)
    

@dataclass
class GetUtterancesViewResponse:
    bad_request_exception: Optional[Any] = field(default=None)
    content_type: str = field(default=None)
    get_utterances_view_response: Optional[shared.GetUtterancesViewResponse] = field(default=None)
    internal_failure_exception: Optional[Any] = field(default=None)
    limit_exceeded_exception: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    
