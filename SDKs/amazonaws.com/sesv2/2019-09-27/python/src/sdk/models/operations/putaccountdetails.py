from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass
class PutAccountDetailsHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    
class PutAccountDetailsRequestBodyContactLanguageEnum(str, Enum):
    EN = "EN"
    JA = "JA"

class PutAccountDetailsRequestBodyMailTypeEnum(str, Enum):
    MARKETING = "MARKETING"
    TRANSACTIONAL = "TRANSACTIONAL"


@dataclass_json
@dataclass
class PutAccountDetailsRequestBody:
    mail_type: PutAccountDetailsRequestBodyMailTypeEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('MailType') }})
    use_case_description: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('UseCaseDescription') }})
    website_url: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('WebsiteURL') }})
    additional_contact_email_addresses: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AdditionalContactEmailAddresses') }})
    contact_language: Optional[PutAccountDetailsRequestBodyContactLanguageEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ContactLanguage') }})
    production_access_enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ProductionAccessEnabled') }})
    

@dataclass
class PutAccountDetailsRequest:
    headers: PutAccountDetailsHeaders = field()
    request: PutAccountDetailsRequestBody = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PutAccountDetailsResponse:
    content_type: str = field()
    status_code: int = field()
    bad_request_exception: Optional[Any] = field(default=None)
    conflict_exception: Optional[Any] = field(default=None)
    put_account_details_response: Optional[dict[str, Any]] = field(default=None)
    too_many_requests_exception: Optional[Any] = field(default=None)
    
