from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import address
from . import currency_enum
from . import paymentunit_enum
from . import customfield
from . import email
from . import gender_enum
from . import currency_enum
from . import address
from . import paymentunit_enum
from . import gender_enum
from . import phonenumber

class EmployeeCompensationsFlsaStatusEnum(str, Enum):
    EXEMPT = "exempt"
    SALARIED_NONEXEMPT = "salaried-nonexempt"
    NONEXEMPT = "nonexempt"
    OWNER = "owner"


@dataclass_json
@dataclass
class EmployeeCompensations:
    currency: Optional[currency_enum.CurrencyEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'currency' }})
    effective_date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'effective_date' }})
    flsa_status: Optional[EmployeeCompensationsFlsaStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'flsa_status' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    job_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'job_id' }})
    payment_unit: Optional[paymentunit_enum.PaymentUnitEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'payment_unit' }})
    rate: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'rate' }})
    
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
    sub_type: Optional[EmployeeEmploymentRoleSubTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sub_type' }})
    type: Optional[EmployeeEmploymentRoleTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    
class EmployeeEmploymentStatusEnum(str, Enum):
    ACTIVE = "active"
    INACTIVE = "inactive"
    TERMINATED = "terminated"
    OTHER = "other"


@dataclass_json
@dataclass
class EmployeeJobs:
    compensation_rate: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'compensation_rate' }})
    currency: Optional[currency_enum.CurrencyEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'currency' }})
    employee_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'employee_id' }})
    end_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'end_date', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    hired_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'hired_at', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    is_primary: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'is_primary' }})
    location: Optional[address.Address] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'location' }})
    payment_unit: Optional[paymentunit_enum.PaymentUnitEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'payment_unit' }})
    role: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'role' }})
    start_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'start_date', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'title' }})
    

@dataclass_json
@dataclass
class EmployeeManager:
    email: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'email' }})
    first_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'first_name' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    last_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'last_name' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    

@dataclass_json
@dataclass
class EmployeePartner:
    birthday: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'birthday', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    deceased_on: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'deceased_on', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    first_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'first_name' }})
    gender: Optional[gender_enum.GenderEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'gender' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    initials: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'initials' }})
    last_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'last_name' }})
    middle_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'middle_name' }})
    

@dataclass_json
@dataclass
class EmployeeSocialLinks:
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    url: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'url' }})
    

@dataclass_json
@dataclass
class EmployeeTeam:
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    

@dataclass_json
@dataclass
class Employee:
    addresses: Optional[List[address.Address]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'addresses' }})
    birthday: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'birthday', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    company_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'company_id' }})
    company_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'company_name' }})
    compensations: Optional[List[EmployeeCompensations]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'compensations' }})
    country_of_birth: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'country_of_birth' }})
    created_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'created_at', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    created_by: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'created_by' }})
    custom_fields: Optional[List[customfield.CustomField]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'custom_fields' }})
    deceased_on: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'deceased_on', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    deleted: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'deleted' }})
    department: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'department' }})
    department_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'department_id' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    dietary_preference: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dietary_preference' }})
    direct_reports: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'direct_reports' }})
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'display_name' }})
    division: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'division' }})
    emails: Optional[List[email.Email]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'emails' }})
    employee_number: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'employee_number' }})
    employment_end_date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'employment_end_date' }})
    employment_role: Optional[EmployeeEmploymentRole] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'employment_role' }})
    employment_start_date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'employment_start_date' }})
    employment_status: Optional[EmployeeEmploymentStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'employment_status' }})
    first_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'first_name' }})
    food_allergies: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'food_allergies' }})
    gender: Optional[gender_enum.GenderEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'gender' }})
    id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    initials: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'initials' }})
    jobs: Optional[List[EmployeeJobs]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'jobs' }})
    languages: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'languages' }})
    last_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'last_name' }})
    manager: Optional[EmployeeManager] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'manager' }})
    marital_status: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'marital_status' }})
    middle_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'middle_name' }})
    nationalities: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nationalities' }})
    partner: Optional[EmployeePartner] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'partner' }})
    phone_numbers: Optional[List[phonenumber.PhoneNumber]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'phone_numbers' }})
    photo_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'photo_url' }})
    preferred_language: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'preferred_language' }})
    preferred_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'preferred_name' }})
    pronouns: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pronouns' }})
    record_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'record_url' }})
    row_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'row_version' }})
    salutation: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'salutation' }})
    social_links: Optional[List[EmployeeSocialLinks]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'social_links' }})
    social_security_number: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'social_security_number' }})
    source: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'source' }})
    source_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'source_id' }})
    tags: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tags' }})
    tax_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tax_code' }})
    tax_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tax_id' }})
    team: Optional[EmployeeTeam] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'team' }})
    timezone: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'timezone' }})
    title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'title' }})
    updated_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'updated_at', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    updated_by: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'updated_by' }})
    works_remote: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'works_remote' }})
    
