from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import additionalclientemailapimodel


@dataclass_json
@dataclass
class ClientDetailsAPIModel:
    additional_emails: Optional[List[additionalclientemailapimodel.AdditionalClientEmailAPIModel]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AdditionalEmails' }})
    address: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Address' }})
    client_country_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ClientCountryId' }})
    client_currency_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ClientCurrencyId' }})
    company_registration_number: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CompanyRegistrationNumber' }})
    created_on: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CreatedOn', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    default_due_date_in_days: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DefaultDueDateInDays' }})
    email: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Email' }})
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Id' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Name' }})
    phone_number: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PhoneNumber' }})
    ui_language_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'UiLanguageId' }})
    vat: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Vat' }})
    
