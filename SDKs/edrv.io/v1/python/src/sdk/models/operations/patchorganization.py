from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass
class PatchOrganizationPathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class PatchOrganizationRequestBodyAddress:
    city: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('city') }})
    country: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('country') }})
    postal_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('postalCode') }})
    street_and_number: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('streetAndNumber') }})
    

@dataclass_json
@dataclass
class PatchOrganizationRequestBodyChannels:
    slack: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('slack') }})
    telegram: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('telegram') }})
    

@dataclass_json
@dataclass
class PatchOrganizationRequestBodyConfigurations:
    basic_auth_enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('basicAuthEnabled') }})
    basic_auth_password: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('basicAuthPassword') }})
    

@dataclass_json
@dataclass
class PatchOrganizationRequestBodyLinks:
    about: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('about') }})
    contact: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('contact') }})
    privacy: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('privacy') }})
    support: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('support') }})
    

@dataclass_json
@dataclass
class PatchOrganizationRequestBodySupportChat:
    type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('value') }})
    

@dataclass_json
@dataclass
class PatchOrganizationRequestBodySupport:
    business_hours: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('business_hours') }})
    chat: Optional[PatchOrganizationRequestBodySupportChat] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('chat') }})
    contact_number: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('contact_number') }})
    email: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('email') }})
    

@dataclass_json
@dataclass
class PatchOrganizationRequestBodySupportChat1:
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    

@dataclass_json
@dataclass
class PatchOrganizationRequestBodyThemeColors:
    primary: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('primary') }})
    secondary: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('secondary') }})
    

@dataclass_json
@dataclass
class PatchOrganizationRequestBodyTheme:
    colors: Optional[PatchOrganizationRequestBodyThemeColors] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('colors') }})
    

@dataclass_json
@dataclass
class PatchOrganizationRequestBody:
    active: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('active') }})
    address: Optional[PatchOrganizationRequestBodyAddress] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('address') }})
    channels: Optional[PatchOrganizationRequestBodyChannels] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('channels') }})
    configurations: Optional[PatchOrganizationRequestBodyConfigurations] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('configurations') }})
    links: Optional[PatchOrganizationRequestBodyLinks] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('links') }})
    locations: Optional[List[Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('locations') }})
    logo: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('logo') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    otp: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('otp') }})
    stripe_connected_account_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('stripe_connected_account_id') }})
    stripe_country: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('stripe_country') }})
    stripe_currency: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('stripe_currency') }})
    stripe_reserve_amount: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('stripe_reserve_amount') }})
    support: Optional[PatchOrganizationRequestBodySupport] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('support') }})
    support_chat: Optional[PatchOrganizationRequestBodySupportChat1] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('supportChat') }})
    theme: Optional[PatchOrganizationRequestBodyTheme] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('theme') }})
    

@dataclass
class PatchOrganizationRequest:
    path_params: PatchOrganizationPathParams = field()
    request: PatchOrganizationRequestBody = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PatchOrganizationResponse:
    content_type: str = field()
    status_code: int = field()
    
