from dataclasses import dataclass, field
from typing import Any,Enum,List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class PutConfigurationSetSuppressionOptionsPathParams:
    configuration_set_name: str = field(default=None, metadata={'path_param': { 'field_name': 'ConfigurationSetName', 'style': 'simple', 'explode': False }})
    

@dataclass
class PutConfigurationSetSuppressionOptionsHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm' }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256' }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential' }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date' }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token' }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature' }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders' }})
    

@dataclass_json
@dataclass
class PutConfigurationSetSuppressionOptionsRequestBody:
    suppressed_reasons: Optional[List[shared.SuppressionListReasonEnum]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SuppressedReasons' }})
    

@dataclass
class PutConfigurationSetSuppressionOptionsRequest:
    path_params: PutConfigurationSetSuppressionOptionsPathParams = field(default=None)
    headers: PutConfigurationSetSuppressionOptionsHeaders = field(default=None)
    request: PutConfigurationSetSuppressionOptionsRequestBody = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PutConfigurationSetSuppressionOptionsResponse:
    bad_request_exception: Optional[Any] = field(default=None)
    content_type: str = field(default=None)
    not_found_exception: Optional[Any] = field(default=None)
    put_configuration_set_suppression_options_response: Optional[dict[str, Any]] = field(default=None)
    status_code: int = field(default=None)
    too_many_requests_exception: Optional[Any] = field(default=None)
    
