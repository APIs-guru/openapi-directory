from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class PutFunctionCodeSigningConfigPathParams:
    function_name: str = field(default=None, metadata={'path_param': { 'field_name': 'FunctionName', 'style': 'simple', 'explode': False }})
    

@dataclass
class PutFunctionCodeSigningConfigHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class PutFunctionCodeSigningConfigRequestBody:
    code_signing_config_arn: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CodeSigningConfigArn' }})
    

@dataclass
class PutFunctionCodeSigningConfigRequest:
    path_params: PutFunctionCodeSigningConfigPathParams = field(default=None)
    headers: PutFunctionCodeSigningConfigHeaders = field(default=None)
    request: PutFunctionCodeSigningConfigRequestBody = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PutFunctionCodeSigningConfigResponse:
    code_signing_config_not_found_exception: Optional[Any] = field(default=None)
    content_type: str = field(default=None)
    invalid_parameter_value_exception: Optional[Any] = field(default=None)
    put_function_code_signing_config_response: Optional[shared.PutFunctionCodeSigningConfigResponse] = field(default=None)
    resource_conflict_exception: Optional[Any] = field(default=None)
    resource_not_found_exception: Optional[Any] = field(default=None)
    service_exception: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    too_many_requests_exception: Optional[Any] = field(default=None)
    
