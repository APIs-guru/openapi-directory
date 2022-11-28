from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from sdk.models import shared


@dataclass
class ListFunctionsByCodeSigningConfigPathParams:
    code_signing_config_arn: str = field(metadata={'path_param': { 'field_name': 'CodeSigningConfigArn', 'style': 'simple', 'explode': False }})
    

@dataclass
class ListFunctionsByCodeSigningConfigQueryParams:
    marker: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'Marker', 'style': 'form', 'explode': True }})
    max_items: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'MaxItems', 'style': 'form', 'explode': True }})
    

@dataclass
class ListFunctionsByCodeSigningConfigHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass
class ListFunctionsByCodeSigningConfigRequest:
    headers: ListFunctionsByCodeSigningConfigHeaders = field()
    path_params: ListFunctionsByCodeSigningConfigPathParams = field()
    query_params: ListFunctionsByCodeSigningConfigQueryParams = field()
    

@dataclass
class ListFunctionsByCodeSigningConfigResponse:
    content_type: str = field()
    status_code: int = field()
    invalid_parameter_value_exception: Optional[Any] = field(default=None)
    list_functions_by_code_signing_config_response: Optional[shared.ListFunctionsByCodeSigningConfigResponse] = field(default=None)
    resource_not_found_exception: Optional[Any] = field(default=None)
    service_exception: Optional[Any] = field(default=None)
    
