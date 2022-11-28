from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass
class PutEmailIdentityMailFromAttributesPathParams:
    email_identity: str = field(metadata={'path_param': { 'field_name': 'EmailIdentity', 'style': 'simple', 'explode': False }})
    

@dataclass
class PutEmailIdentityMailFromAttributesHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    
class PutEmailIdentityMailFromAttributesRequestBodyBehaviorOnMxFailureEnum(str, Enum):
    USE_DEFAULT_VALUE = "USE_DEFAULT_VALUE"
    REJECT_MESSAGE = "REJECT_MESSAGE"


@dataclass_json
@dataclass
class PutEmailIdentityMailFromAttributesRequestBody:
    behavior_on_mx_failure: Optional[PutEmailIdentityMailFromAttributesRequestBodyBehaviorOnMxFailureEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('BehaviorOnMxFailure') }})
    mail_from_domain: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MailFromDomain') }})
    

@dataclass
class PutEmailIdentityMailFromAttributesRequest:
    headers: PutEmailIdentityMailFromAttributesHeaders = field()
    path_params: PutEmailIdentityMailFromAttributesPathParams = field()
    request: PutEmailIdentityMailFromAttributesRequestBody = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PutEmailIdentityMailFromAttributesResponse:
    content_type: str = field()
    status_code: int = field()
    bad_request_exception: Optional[Any] = field(default=None)
    not_found_exception: Optional[Any] = field(default=None)
    put_email_identity_mail_from_attributes_response: Optional[dict[str, Any]] = field(default=None)
    too_many_requests_exception: Optional[Any] = field(default=None)
    
