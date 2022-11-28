from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class Client:
    address: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Address') }, 'form': { 'field_name': 'Address' }})
    client_country_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ClientCountryId') }, 'form': { 'field_name': 'ClientCountryId' }})
    client_currency_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ClientCurrencyId') }, 'form': { 'field_name': 'ClientCurrencyId' }})
    company_registration_number: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CompanyRegistrationNumber') }, 'form': { 'field_name': 'CompanyRegistrationNumber' }})
    default_due_date_in_days: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DefaultDueDateInDays') }, 'form': { 'field_name': 'DefaultDueDateInDays' }})
    email: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Email') }, 'form': { 'field_name': 'Email' }})
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Id') }, 'form': { 'field_name': 'Id' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Name') }, 'form': { 'field_name': 'Name' }})
    phone_number: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PhoneNumber') }, 'form': { 'field_name': 'PhoneNumber' }})
    ui_language_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('UiLanguageId') }, 'form': { 'field_name': 'UiLanguageId' }})
    user_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('UserId') }, 'form': { 'field_name': 'UserId' }})
    vat: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Vat') }, 'form': { 'field_name': 'Vat' }})
    
