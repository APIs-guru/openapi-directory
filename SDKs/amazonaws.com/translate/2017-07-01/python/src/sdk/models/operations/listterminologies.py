from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from sdk.models import shared


@dataclass
class ListTerminologiesQueryParams:
    max_results: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'MaxResults', 'style': 'form', 'explode': True }})
    next_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'NextToken', 'style': 'form', 'explode': True }})
    
class ListTerminologiesXAmzTargetEnum(str, Enum):
    AWS_SHINE_FRONTEND_SERVICE_20170701_LIST_TERMINOLOGIES = "AWSShineFrontendService_20170701.ListTerminologies"


@dataclass
class ListTerminologiesHeaders:
    x_amz_target: ListTerminologiesXAmzTargetEnum = field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass
class ListTerminologiesRequest:
    headers: ListTerminologiesHeaders = field()
    query_params: ListTerminologiesQueryParams = field()
    request: shared.ListTerminologiesRequest = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class ListTerminologiesResponse:
    content_type: str = field()
    status_code: int = field()
    internal_server_exception: Optional[Any] = field(default=None)
    invalid_parameter_value_exception: Optional[Any] = field(default=None)
    list_terminologies_response: Optional[shared.ListTerminologiesResponse] = field(default=None)
    too_many_requests_exception: Optional[Any] = field(default=None)
    
