from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class EmployeeCompensationsFlsaStatusEnum(str, Enum):
    EXEMPT = "exempt"
    SALARIED_NONEXEMPT = "salaried-nonexempt"
    NONEXEMPT = "nonexempt"
    OWNER = "owner"


@dataclass_json
@dataclass
class EmployeeCompensations:
    currency: Optional[CurrencyEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('currency') }})
    effective_date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('effective_date') }})
    flsa_status: Optional[EmployeeCompensationsFlsaStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('flsa_status') }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    job_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('job_id') }})
    payment_unit: Optional[PaymentUnitEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('payment_unit') }})
    rate: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rate') }})
    
class EmployeeEmploymentRoleSubTypeEnum(str, Enum):
    FULL_TIME = "full_time"
    PART_TIME = "part_time"
    HOURLY = "hourly"

class EmployeeEmploymentRoleTypeEnum(str, Enum):
    CONTRACTOR = "contractor"
    EMPLOYEE = "employee"
    FREELANCE = "freelance"
    TEMP = "temp"
    INTERSHIP = "intership"
    OTHER = "other"


@dataclass_json
@dataclass
class EmployeeEmploymentRole:
    sub_type: Optional[EmployeeEmploymentRoleSubTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sub_type') }})
    type: Optional[EmployeeEmploymentRoleTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    
class EmployeeEmploymentStatusEnum(str, Enum):
    ACTIVE = "active"
    INACTIVE = "inactive"
    TERMINATED = "terminated"
    OTHER = "other"


@dataclass_json
@dataclass
class EmployeeJobs:
    compensation_rate: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('compensation_rate') }})
    currency: Optional[CurrencyEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('currency') }})
    employee_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('employee_id') }})
    end_date: Optional[date] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('end_date'), 'encoder': utils.dateisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    hired_at: Optional[date] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('hired_at'), 'encoder': utils.dateisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    is_primary: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('is_primary') }})
    location: Optional[Address] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('location') }})
    payment_unit: Optional[PaymentUnitEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('payment_unit') }})
    role: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('role') }})
    start_date: Optional[date] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('start_date'), 'encoder': utils.dateisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('title') }})
    

@dataclass_json
@dataclass
class EmployeeManager:
    email: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('email') }})
    first_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('first_name') }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    last_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('last_name') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    

@dataclass_json
@dataclass
class EmployeePartner:
    birthday: Optional[date] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('birthday'), 'encoder': utils.dateisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    deceased_on: Optional[date] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deceased_on'), 'encoder': utils.dateisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    first_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('first_name') }})
    gender: Optional[GenderEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('gender') }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    initials: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('initials') }})
    last_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('last_name') }})
    middle_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('middle_name') }})
    

@dataclass_json
@dataclass
class EmployeeSocialLinks:
    url: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    

@dataclass_json
@dataclass
class EmployeeTeam:
    r"""EmployeeTeam
    The team the user is currently in.
    """
    
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    

@dataclass_json
@dataclass
class EmployeeCompensationsInput:
    currency: Optional[CurrencyEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('currency') }})
    effective_date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('effective_date') }})
    flsa_status: Optional[EmployeeCompensationsFlsaStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('flsa_status') }})
    payment_unit: Optional[PaymentUnitEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('payment_unit') }})
    rate: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rate') }})
    

@dataclass_json
@dataclass
class EmployeeJobsInput:
    compensation_rate: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('compensation_rate') }})
    currency: Optional[CurrencyEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('currency') }})
    end_date: Optional[date] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('end_date'), 'encoder': utils.dateisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    hired_at: Optional[date] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('hired_at'), 'encoder': utils.dateisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    is_primary: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('is_primary') }})
    location: Optional[Address] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('location') }})
    payment_unit: Optional[PaymentUnitEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('payment_unit') }})
    role: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('role') }})
    start_date: Optional[date] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('start_date'), 'encoder': utils.dateisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('title') }})
    

@dataclass_json
@dataclass
class EmployeeManagerInput:
    email: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('email') }})
    first_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('first_name') }})
    last_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('last_name') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    

@dataclass_json
@dataclass
class EmployeePartnerInput:
    birthday: Optional[date] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('birthday'), 'encoder': utils.dateisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    deceased_on: Optional[date] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deceased_on'), 'encoder': utils.dateisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    first_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('first_name') }})
    gender: Optional[GenderEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('gender') }})
    initials: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('initials') }})
    last_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('last_name') }})
    middle_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('middle_name') }})
    

@dataclass_json
@dataclass
class Employee:
    id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    addresses: Optional[List[Address]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('addresses') }})
    birthday: Optional[date] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('birthday'), 'encoder': utils.dateisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    company_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('company_id') }})
    company_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('company_name') }})
    compensations: Optional[List[EmployeeCompensations]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('compensations') }})
    country_of_birth: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('country_of_birth') }})
    created_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('created_at'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    created_by: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('created_by') }})
    custom_fields: Optional[List[CustomField]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('custom_fields') }})
    deceased_on: Optional[date] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deceased_on'), 'encoder': utils.dateisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    deleted: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deleted') }})
    department: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('department') }})
    department_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('department_id') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    dietary_preference: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dietary_preference') }})
    direct_reports: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('direct_reports') }})
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('display_name') }})
    division: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('division') }})
    emails: Optional[List[Email]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('emails') }})
    employee_number: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('employee_number') }})
    employment_end_date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('employment_end_date') }})
    employment_role: Optional[EmployeeEmploymentRole] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('employment_role') }})
    employment_start_date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('employment_start_date') }})
    employment_status: Optional[EmployeeEmploymentStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('employment_status') }})
    first_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('first_name') }})
    food_allergies: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('food_allergies') }})
    gender: Optional[GenderEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('gender') }})
    initials: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('initials') }})
    jobs: Optional[List[EmployeeJobs]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('jobs') }})
    languages: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('languages') }})
    last_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('last_name') }})
    manager: Optional[EmployeeManager] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('manager') }})
    marital_status: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('marital_status') }})
    middle_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('middle_name') }})
    nationalities: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nationalities') }})
    partner: Optional[EmployeePartner] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('partner') }})
    phone_numbers: Optional[List[PhoneNumber]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('phone_numbers') }})
    photo_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('photo_url') }})
    preferred_language: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('preferred_language') }})
    preferred_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('preferred_name') }})
    pronouns: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pronouns') }})
    record_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('record_url') }})
    row_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('row_version') }})
    salutation: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('salutation') }})
    social_links: Optional[List[EmployeeSocialLinks]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('social_links') }})
    social_security_number: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('social_security_number') }})
    source: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('source') }})
    source_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('source_id') }})
    tags: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tags') }})
    tax_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tax_code') }})
    tax_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tax_id') }})
    team: Optional[EmployeeTeam] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('team') }})
    timezone: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('timezone') }})
    title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('title') }})
    updated_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updated_at'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    updated_by: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updated_by') }})
    works_remote: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('works_remote') }})
    

@dataclass_json
@dataclass
class EmployeeInput:
    addresses: Optional[List[Address]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('addresses') }})
    birthday: Optional[date] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('birthday'), 'encoder': utils.dateisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    company_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('company_id') }})
    company_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('company_name') }})
    compensations: Optional[List[EmployeeCompensationsInput]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('compensations') }})
    country_of_birth: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('country_of_birth') }})
    custom_fields: Optional[List[CustomField]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('custom_fields') }})
    deceased_on: Optional[date] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deceased_on'), 'encoder': utils.dateisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    deleted: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deleted') }})
    department: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('department') }})
    department_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('department_id') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    dietary_preference: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dietary_preference') }})
    direct_reports: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('direct_reports') }})
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('display_name') }})
    division: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('division') }})
    emails: Optional[List[Email]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('emails') }})
    employee_number: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('employee_number') }})
    employment_end_date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('employment_end_date') }})
    employment_role: Optional[EmployeeEmploymentRole] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('employment_role') }})
    employment_start_date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('employment_start_date') }})
    employment_status: Optional[EmployeeEmploymentStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('employment_status') }})
    first_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('first_name') }})
    food_allergies: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('food_allergies') }})
    gender: Optional[GenderEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('gender') }})
    initials: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('initials') }})
    jobs: Optional[List[EmployeeJobsInput]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('jobs') }})
    languages: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('languages') }})
    last_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('last_name') }})
    manager: Optional[EmployeeManagerInput] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('manager') }})
    marital_status: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('marital_status') }})
    middle_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('middle_name') }})
    nationalities: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nationalities') }})
    partner: Optional[EmployeePartnerInput] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('partner') }})
    phone_numbers: Optional[List[PhoneNumber]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('phone_numbers') }})
    photo_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('photo_url') }})
    preferred_language: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('preferred_language') }})
    preferred_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('preferred_name') }})
    pronouns: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pronouns') }})
    record_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('record_url') }})
    row_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('row_version') }})
    salutation: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('salutation') }})
    social_links: Optional[List[EmployeeSocialLinks]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('social_links') }})
    social_security_number: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('social_security_number') }})
    source: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('source') }})
    source_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('source_id') }})
    tags: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tags') }})
    tax_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tax_code') }})
    tax_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tax_id') }})
    team: Optional[EmployeeTeam] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('team') }})
    timezone: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('timezone') }})
    title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('title') }})
    works_remote: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('works_remote') }})
    
