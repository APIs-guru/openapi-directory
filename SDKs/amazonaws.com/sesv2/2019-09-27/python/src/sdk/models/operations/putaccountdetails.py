from dataclasses import dataclass, field
from typing import Any,Enum,List,Optional
from dataclasses_json import dataclass_json


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
    additional_contact_email_addresses: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AdditionalContactEmailAddresses' }})
    contact_language: Optional[PutAccountDetailsRequestBodyContactLanguageEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ContactLanguage' }})
    mail_type: PutAccountDetailsRequestBodyMailTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MailType' }})
    production_access_enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ProductionAccessEnabled' }})
    use_case_description: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'UseCaseDescription' }})
    website_url: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'WebsiteURL' }})
    

@dataclass
class PutAccountDetailsRequest:
    headers: PutAccountDetailsHeaders = field(default=None)
    request: PutAccountDetailsRequestBody = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PutAccountDetailsResponse:
    bad_request_exception: Optional[Any] = field(default=None)
    conflict_exception: Optional[Any] = field(default=None)
    content_type: str = field(default=None)
    put_account_details_response: Optional[dict[str, Any]] = field(default=None)
    status_code: int = field(default=None)
    too_many_requests_exception: Optional[Any] = field(default=None)
    
