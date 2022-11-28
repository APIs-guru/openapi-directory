from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from sdk.models import shared

class GetLayerVersionByArnFindEnum(str, Enum):
    LAYER_VERSION = "LayerVersion"


@dataclass
class GetLayerVersionByArnQueryParams:
    arn: str = field(metadata={'query_param': { 'field_name': 'Arn', 'style': 'form', 'explode': True }})
    find: GetLayerVersionByArnFindEnum = field(metadata={'query_param': { 'field_name': 'find', 'style': 'form', 'explode': True }})
    

@dataclass
class GetLayerVersionByArnHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetLayerVersionByArnRequest:
    headers: GetLayerVersionByArnHeaders = field()
    query_params: GetLayerVersionByArnQueryParams = field()
    

@dataclass
class GetLayerVersionByArnResponse:
    content_type: str = field()
    status_code: int = field()
    get_layer_version_response: Optional[shared.GetLayerVersionResponse] = field(default=None)
    invalid_parameter_value_exception: Optional[Any] = field(default=None)
    resource_not_found_exception: Optional[Any] = field(default=None)
    service_exception: Optional[Any] = field(default=None)
    too_many_requests_exception: Optional[Any] = field(default=None)
    
