from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from sdk.models import shared


@dataclass
class GetEventSourcePathParams:
    uuid: str = field(metadata={'path_param': { 'field_name': 'UUID', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetEventSourceHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetEventSourceRequest:
    headers: GetEventSourceHeaders = field()
    path_params: GetEventSourcePathParams = field()
    

@dataclass
class GetEventSourceResponse:
    content_type: str = field()
    status_code: int = field()
    event_source_configuration: Optional[shared.EventSourceConfiguration] = field(default=None)
    invalid_parameter_value_exception: Optional[shared.InvalidParameterValueException] = field(default=None)
    resource_not_found_exception: Optional[shared.ResourceNotFoundException] = field(default=None)
    service_exception: Optional[shared.ServiceException] = field(default=None)
    
