from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,List,Optional
from enum import Enum
from sdk.models import shared


@dataclass
class GetUtterancesViewPathParams:
    botname: str = field(metadata={'path_param': { 'field_name': 'botname', 'style': 'simple', 'explode': False }})
    
class GetUtterancesViewStatusTypeEnum(str, Enum):
    DETECTED = "Detected"
    MISSED = "Missed"

class GetUtterancesViewViewEnum(str, Enum):
    AGGREGATION = "aggregation"


@dataclass
class GetUtterancesViewQueryParams:
    bot_versions: List[str] = field(metadata={'query_param': { 'field_name': 'bot_versions', 'style': 'form', 'explode': True }})
    status_type: GetUtterancesViewStatusTypeEnum = field(metadata={'query_param': { 'field_name': 'status_type', 'style': 'form', 'explode': True }})
    view: GetUtterancesViewViewEnum = field(metadata={'query_param': { 'field_name': 'view', 'style': 'form', 'explode': True }})
    

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
    headers: GetUtterancesViewHeaders = field()
    path_params: GetUtterancesViewPathParams = field()
    query_params: GetUtterancesViewQueryParams = field()
    

@dataclass
class GetUtterancesViewResponse:
    content_type: str = field()
    status_code: int = field()
    bad_request_exception: Optional[Any] = field(default=None)
    get_utterances_view_response: Optional[shared.GetUtterancesViewResponse] = field(default=None)
    internal_failure_exception: Optional[Any] = field(default=None)
    limit_exceeded_exception: Optional[Any] = field(default=None)
    
