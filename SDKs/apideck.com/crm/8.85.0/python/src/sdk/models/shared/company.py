from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class CompanyCompanyRowType:
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    

@dataclass_json
@dataclass
class Company:
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    abn_branch: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('abn_branch') }})
    abn_or_tfn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('abn_or_tfn') }})
    acn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('acn') }})
    addresses: Optional[List[Address]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('addresses') }})
    annual_revenue: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('annual_revenue') }})
    bank_accounts: Optional[List[BankAccount]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bank_accounts') }})
    birthday: Optional[date] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('birthday'), 'encoder': utils.dateisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    created_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('created_at'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    created_by: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('created_by') }})
    currency: Optional[CurrencyEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('currency') }})
    custom_fields: Optional[List[CustomField]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('custom_fields') }})
    deleted: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deleted') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    emails: Optional[List[Email]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('emails') }})
    fax: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fax') }})
    first_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('first_name') }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    image: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('image') }})
    industry: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('industry') }})
    interaction_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('interaction_count') }})
    last_activity_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('last_activity_at'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    last_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('last_name') }})
    number_of_employees: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('number_of_employees') }})
    owner_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('owner_id') }})
    ownership: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ownership') }})
    parent_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('parent_id') }})
    payee_number: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('payee_number') }})
    phone_numbers: Optional[List[PhoneNumber]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('phone_numbers') }})
    read_only: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('read_only') }})
    row_type: Optional[CompanyCompanyRowType] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('row_type') }})
    sales_tax_number: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sales_tax_number') }})
    salutation: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('salutation') }})
    social_links: Optional[List[SocialLink]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('social_links') }})
    status: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    tags: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tags') }})
    updated_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updated_at'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    updated_by: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updated_by') }})
    vat_number: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('vat_number') }})
    websites: Optional[List[Website]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('websites') }})
    

@dataclass_json
@dataclass
class CompanyInput:
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    abn_branch: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('abn_branch') }})
    abn_or_tfn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('abn_or_tfn') }})
    acn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('acn') }})
    addresses: Optional[List[Address]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('addresses') }})
    annual_revenue: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('annual_revenue') }})
    bank_accounts: Optional[List[BankAccount]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bank_accounts') }})
    birthday: Optional[date] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('birthday'), 'encoder': utils.dateisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    currency: Optional[CurrencyEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('currency') }})
    custom_fields: Optional[List[CustomField]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('custom_fields') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    emails: Optional[List[Email]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('emails') }})
    fax: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fax') }})
    first_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('first_name') }})
    image: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('image') }})
    industry: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('industry') }})
    last_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('last_name') }})
    number_of_employees: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('number_of_employees') }})
    owner_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('owner_id') }})
    ownership: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ownership') }})
    payee_number: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('payee_number') }})
    phone_numbers: Optional[List[PhoneNumber]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('phone_numbers') }})
    read_only: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('read_only') }})
    row_type: Optional[CompanyCompanyRowType] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('row_type') }})
    sales_tax_number: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sales_tax_number') }})
    salutation: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('salutation') }})
    social_links: Optional[List[SocialLink]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('social_links') }})
    status: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    tags: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tags') }})
    vat_number: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('vat_number') }})
    websites: Optional[List[Website]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('websites') }})
    
