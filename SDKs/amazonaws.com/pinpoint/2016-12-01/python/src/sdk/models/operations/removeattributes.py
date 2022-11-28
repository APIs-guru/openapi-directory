from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class RemoveAttributesPathParams:
    application_id: str = field(metadata={'path_param': { 'field_name': 'application-id', 'style': 'simple', 'explode': False }})
    attribute_type: str = field(metadata={'path_param': { 'field_name': 'attribute-type', 'style': 'simple', 'explode': False }})
    

@dataclass
class RemoveAttributesHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class RemoveAttributesRequestBodyUpdateAttributesRequest:
    r"""RemoveAttributesRequestBodyUpdateAttributesRequest
    Specifies one or more attributes to remove from all the endpoints that are associated with an application.
    """
    
    blacklist: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Blacklist') }})
    

@dataclass_json
@dataclass
class RemoveAttributesRequestBody:
    update_attributes_request: RemoveAttributesRequestBodyUpdateAttributesRequest = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('UpdateAttributesRequest') }})
    

@dataclass
class RemoveAttributesRequest:
    headers: RemoveAttributesHeaders = field()
    path_params: RemoveAttributesPathParams = field()
    request: RemoveAttributesRequestBody = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class RemoveAttributesResponse:
    content_type: str = field()
    status_code: int = field()
    bad_request_exception: Optional[Any] = field(default=None)
    forbidden_exception: Optional[Any] = field(default=None)
    internal_server_error_exception: Optional[Any] = field(default=None)
    method_not_allowed_exception: Optional[Any] = field(default=None)
    not_found_exception: Optional[Any] = field(default=None)
    payload_too_large_exception: Optional[Any] = field(default=None)
    remove_attributes_response: Optional[shared.RemoveAttributesResponse] = field(default=None)
    too_many_requests_exception: Optional[Any] = field(default=None)
    
