from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from sdk.models import shared


@dataclass
class UpdateFunctionConfigurationPathParams:
    function_name: str = field(metadata={'path_param': { 'field_name': 'FunctionName', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateFunctionConfigurationQueryParams:
    description: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'Description', 'style': 'form', 'explode': True }})
    handler: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'Handler', 'style': 'form', 'explode': True }})
    memory_size: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'MemorySize', 'style': 'form', 'explode': True }})
    role: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'Role', 'style': 'form', 'explode': True }})
    timeout: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'Timeout', 'style': 'form', 'explode': True }})
    

@dataclass
class UpdateFunctionConfigurationHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateFunctionConfigurationRequest:
    headers: UpdateFunctionConfigurationHeaders = field()
    path_params: UpdateFunctionConfigurationPathParams = field()
    query_params: UpdateFunctionConfigurationQueryParams = field()
    

@dataclass
class UpdateFunctionConfigurationResponse:
    content_type: str = field()
    status_code: int = field()
    function_configuration: Optional[shared.FunctionConfiguration] = field(default=None)
    invalid_parameter_value_exception: Optional[shared.InvalidParameterValueException] = field(default=None)
    resource_not_found_exception: Optional[shared.ResourceNotFoundException] = field(default=None)
    service_exception: Optional[shared.ServiceException] = field(default=None)
    
