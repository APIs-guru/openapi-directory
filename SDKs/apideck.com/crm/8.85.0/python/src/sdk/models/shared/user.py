from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class UserInput:
    emails: List[Email] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('emails') }})
    addresses: Optional[List[Address]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('addresses') }})
    company_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('company_name') }})
    department: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('department') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    division: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('division') }})
    employee_number: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('employee_number') }})
    first_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('first_name') }})
    image: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('image') }})
    language: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('language') }})
    last_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('last_name') }})
    parent_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('parent_id') }})
    password: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('password') }})
    phone_numbers: Optional[List[PhoneNumber]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('phone_numbers') }})
    status: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('title') }})
    username: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('username') }})
    

@dataclass_json
@dataclass
class UserOutput:
    emails: List[Email] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('emails') }})
    addresses: Optional[List[Address]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('addresses') }})
    company_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('company_name') }})
    created_at: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('created_at') }})
    department: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('department') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    division: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('division') }})
    employee_number: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('employee_number') }})
    first_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('first_name') }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    image: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('image') }})
    language: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('language') }})
    last_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('last_name') }})
    parent_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('parent_id') }})
    phone_numbers: Optional[List[PhoneNumber]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('phone_numbers') }})
    status: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('title') }})
    updated_at: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updated_at') }})
    username: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('username') }})
    
