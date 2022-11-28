from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class JobBranch:
    r"""JobBranch
    Details of the branch for which the job is created.
    """
    
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    
class JobEmploymentTermsEnum(str, Enum):
    FULL_TIME = "full-time"
    PART_TIME = "part-time"
    INTERSHIP = "intership"
    CONTRACTOR = "contractor"
    EMPLOYEE = "employee"
    FREELANCE = "freelance"
    TEMP = "temp"
    SEASONAL = "seasonal"
    VOLUNTEER = "volunteer"
    OTHER = "other"


@dataclass_json
@dataclass
class JobSalary:
    currency: Optional[CurrencyEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('currency') }})
    max: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('max') }})
    min: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('min') }})
    
class JobVisibilityEnum(str, Enum):
    PUBLIC = "public"
    INTERNAL = "internal"


@dataclass_json
@dataclass
class Job:
    addresses: Optional[List[Address]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('addresses') }})
    available_to_employees: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('available_to_employees') }})
    blocks: Optional[List[Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('blocks') }})
    branch: Optional[JobBranch] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('branch') }})
    closing: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('closing') }})
    closing_date: Optional[date] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('closing_date'), 'encoder': utils.dateisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    closing_html: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('closing_html') }})
    code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    confidential: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('confidential') }})
    created_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('created_at'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    created_by: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('created_by') }})
    deleted: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deleted') }})
    department: Optional[Department] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('department') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    description_html: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description_html') }})
    employment_terms: Optional[JobEmploymentTermsEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('employment_terms') }})
    experience: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('experience') }})
    followers: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('followers') }})
    hiring_managers: Optional[List[Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('hiring_managers') }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    job_portal_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('job_portal_url') }})
    language: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('language') }})
    owner_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('owner_id') }})
    published_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('published_at'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    record_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('record_url') }})
    recruiters: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('recruiters') }})
    remote: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('remote') }})
    requisition_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('requisition_id') }})
    salary: Optional[JobSalary] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('salary') }})
    sequence: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sequence') }})
    slug: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('slug') }})
    status: Optional[JobStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    tags: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tags') }})
    title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('title') }})
    updated_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updated_at'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    updated_by: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updated_by') }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    visibility: Optional[JobVisibilityEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('visibility') }})
    
