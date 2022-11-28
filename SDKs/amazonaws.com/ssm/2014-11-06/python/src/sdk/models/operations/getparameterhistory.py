from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from sdk.models import shared


@dataclass
class GetParameterHistoryQueryParams:
    max_results: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'MaxResults', 'style': 'form', 'explode': True }})
    next_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'NextToken', 'style': 'form', 'explode': True }})
    
class GetParameterHistoryXAmzTargetEnum(str, Enum):
    AMAZON_SSM_GET_PARAMETER_HISTORY = "AmazonSSM.GetParameterHistory"


@dataclass
class GetParameterHistoryHeaders:
    x_amz_target: GetParameterHistoryXAmzTargetEnum = field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetParameterHistoryRequest:
    headers: GetParameterHistoryHeaders = field()
    query_params: GetParameterHistoryQueryParams = field()
    request: shared.GetParameterHistoryRequest = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class GetParameterHistoryResponse:
    content_type: str = field()
    status_code: int = field()
    get_parameter_history_result: Optional[shared.GetParameterHistoryResult] = field(default=None)
    internal_server_error: Optional[Any] = field(default=None)
    invalid_key_id: Optional[Any] = field(default=None)
    invalid_next_token: Optional[Any] = field(default=None)
    parameter_not_found: Optional[Any] = field(default=None)
    
