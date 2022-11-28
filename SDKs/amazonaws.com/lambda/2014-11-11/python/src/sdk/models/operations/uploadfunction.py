from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class UploadFunctionPathParams:
    function_name: str = field(metadata={'path_param': { 'field_name': 'FunctionName', 'style': 'simple', 'explode': False }})
    
class UploadFunctionModeEnum(str, Enum):
    EVENT = "event"

class UploadFunctionRuntimeEnum(str, Enum):
    NODEJS = "nodejs"


@dataclass
class UploadFunctionQueryParams:
    handler: str = field(metadata={'query_param': { 'field_name': 'Handler', 'style': 'form', 'explode': True }})
    mode: UploadFunctionModeEnum = field(metadata={'query_param': { 'field_name': 'Mode', 'style': 'form', 'explode': True }})
    role: str = field(metadata={'query_param': { 'field_name': 'Role', 'style': 'form', 'explode': True }})
    runtime: UploadFunctionRuntimeEnum = field(metadata={'query_param': { 'field_name': 'Runtime', 'style': 'form', 'explode': True }})
    description: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'Description', 'style': 'form', 'explode': True }})
    memory_size: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'MemorySize', 'style': 'form', 'explode': True }})
    timeout: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'Timeout', 'style': 'form', 'explode': True }})
    

@dataclass
class UploadFunctionHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class UploadFunctionRequestBody:
    function_zip: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('FunctionZip') }})
    

@dataclass
class UploadFunctionRequest:
    headers: UploadFunctionHeaders = field()
    path_params: UploadFunctionPathParams = field()
    query_params: UploadFunctionQueryParams = field()
    request: UploadFunctionRequestBody = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class UploadFunctionResponse:
    content_type: str = field()
    status_code: int = field()
    function_configuration: Optional[shared.FunctionConfiguration] = field(default=None)
    invalid_parameter_value_exception: Optional[shared.InvalidParameterValueException] = field(default=None)
    resource_not_found_exception: Optional[shared.ResourceNotFoundException] = field(default=None)
    service_exception: Optional[shared.ServiceException] = field(default=None)
    
