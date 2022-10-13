from dataclasses import dataclass, field
from typing import Any,Enum,Optional
from sdk.models import shared

class GetLayerVersionByArnFindEnum(str, Enum):
    LAYER_VERSION = "LayerVersion"


@dataclass
class GetLayerVersionByArnQueryParams:
    arn: str = field(default=None, metadata={'query_param': { 'field_name': 'Arn', 'style': 'form', 'explode': True }})
    find: GetLayerVersionByArnFindEnum = field(default=None, metadata={'query_param': { 'field_name': 'find', 'style': 'form', 'explode': True }})
    

@dataclass
class GetLayerVersionByArnHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm' }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256' }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential' }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date' }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token' }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature' }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders' }})
    

@dataclass
class GetLayerVersionByArnRequest:
    query_params: GetLayerVersionByArnQueryParams = field(default=None)
    headers: GetLayerVersionByArnHeaders = field(default=None)
    

@dataclass
class GetLayerVersionByArnResponse:
    content_type: str = field(default=None)
    get_layer_version_response: Optional[shared.GetLayerVersionResponse] = field(default=None)
    invalid_parameter_value_exception: Optional[Any] = field(default=None)
    resource_not_found_exception: Optional[Any] = field(default=None)
    service_exception: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    too_many_requests_exception: Optional[Any] = field(default=None)
    
