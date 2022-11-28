from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from sdk.models import shared


@dataclass
class GetParametersByPathQueryParams:
    max_results: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'MaxResults', 'style': 'form', 'explode': True }})
    next_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'NextToken', 'style': 'form', 'explode': True }})
    
class GetParametersByPathXAmzTargetEnum(str, Enum):
    AMAZON_SSM_GET_PARAMETERS_BY_PATH = "AmazonSSM.GetParametersByPath"


@dataclass
class GetParametersByPathHeaders:
    x_amz_target: GetParametersByPathXAmzTargetEnum = field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetParametersByPathRequest:
    headers: GetParametersByPathHeaders = field()
    query_params: GetParametersByPathQueryParams = field()
    request: shared.GetParametersByPathRequest = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class GetParametersByPathResponse:
    content_type: str = field()
    status_code: int = field()
    get_parameters_by_path_result: Optional[shared.GetParametersByPathResult] = field(default=None)
    internal_server_error: Optional[Any] = field(default=None)
    invalid_filter_key: Optional[Any] = field(default=None)
    invalid_filter_option: Optional[Any] = field(default=None)
    invalid_filter_value: Optional[Any] = field(default=None)
    invalid_key_id: Optional[Any] = field(default=None)
    invalid_next_token: Optional[Any] = field(default=None)
    
