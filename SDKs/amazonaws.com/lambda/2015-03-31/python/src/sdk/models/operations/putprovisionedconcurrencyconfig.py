from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class PutProvisionedConcurrencyConfigPathParams:
    function_name: str = field(metadata={'path_param': { 'field_name': 'FunctionName', 'style': 'simple', 'explode': False }})
    

@dataclass
class PutProvisionedConcurrencyConfigQueryParams:
    qualifier: str = field(metadata={'query_param': { 'field_name': 'Qualifier', 'style': 'form', 'explode': True }})
    

@dataclass
class PutProvisionedConcurrencyConfigHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class PutProvisionedConcurrencyConfigRequestBody:
    provisioned_concurrent_executions: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ProvisionedConcurrentExecutions') }})
    

@dataclass
class PutProvisionedConcurrencyConfigRequest:
    headers: PutProvisionedConcurrencyConfigHeaders = field()
    path_params: PutProvisionedConcurrencyConfigPathParams = field()
    query_params: PutProvisionedConcurrencyConfigQueryParams = field()
    request: PutProvisionedConcurrencyConfigRequestBody = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PutProvisionedConcurrencyConfigResponse:
    content_type: str = field()
    status_code: int = field()
    invalid_parameter_value_exception: Optional[Any] = field(default=None)
    put_provisioned_concurrency_config_response: Optional[shared.PutProvisionedConcurrencyConfigResponse] = field(default=None)
    resource_conflict_exception: Optional[Any] = field(default=None)
    resource_not_found_exception: Optional[Any] = field(default=None)
    service_exception: Optional[Any] = field(default=None)
    too_many_requests_exception: Optional[Any] = field(default=None)
    
