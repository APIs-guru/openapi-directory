from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class CreateEmailIdentityHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class CreateEmailIdentityRequestBodyDkimSigningAttributes:
    r"""CreateEmailIdentityRequestBodyDkimSigningAttributes
    An object that contains information about the tokens used for setting up Bring Your Own DKIM (BYODKIM).
    """
    
    domain_signing_private_key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DomainSigningPrivateKey') }})
    domain_signing_selector: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DomainSigningSelector') }})
    

@dataclass_json
@dataclass
class CreateEmailIdentityRequestBody:
    email_identity: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('EmailIdentity') }})
    configuration_set_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ConfigurationSetName') }})
    dkim_signing_attributes: Optional[CreateEmailIdentityRequestBodyDkimSigningAttributes] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DkimSigningAttributes') }})
    tags: Optional[List[shared.Tag]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Tags') }})
    

@dataclass
class CreateEmailIdentityRequest:
    headers: CreateEmailIdentityHeaders = field()
    request: CreateEmailIdentityRequestBody = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class CreateEmailIdentityResponse:
    content_type: str = field()
    status_code: int = field()
    already_exists_exception: Optional[Any] = field(default=None)
    bad_request_exception: Optional[Any] = field(default=None)
    concurrent_modification_exception: Optional[Any] = field(default=None)
    create_email_identity_response: Optional[shared.CreateEmailIdentityResponse] = field(default=None)
    limit_exceeded_exception: Optional[Any] = field(default=None)
    not_found_exception: Optional[Any] = field(default=None)
    too_many_requests_exception: Optional[Any] = field(default=None)
    
