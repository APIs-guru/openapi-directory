from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Enum,List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass_json
@dataclass
class JobBranchBranch:
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    
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
    currency: Optional[shared.CurrencyEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'currency' }})
    max: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'max' }})
    min: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'min' }})
    
class JobVisibilityEnum(str, Enum):
    PUBLIC = "public"
    INTERNAL = "internal"


@dataclass_json
@dataclass
class Job:
    addresses: Optional[List[shared.Address]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'addresses' }})
    available_to_employees: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'available_to_employees' }})
    blocks: Optional[List[Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'blocks' }})
    branch: Optional[JobBranchBranch] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'branch' }})
    closing: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'closing' }})
    closing_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'closing_date', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    closing_html: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'closing_html' }})
    code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'code' }})
    confidential: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'confidential' }})
    created_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'created_at', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    created_by: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'created_by' }})
    deleted: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'deleted' }})
    department: Optional[shared.Department] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'department' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    description_html: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description_html' }})
    employment_terms: Optional[JobEmploymentTermsEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'employment_terms' }})
    experience: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'experience' }})
    followers: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'followers' }})
    hiring_managers: Optional[List[Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'hiring_managers' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    job_portal_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'job_portal_url' }})
    language: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'language' }})
    owner_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'owner_id' }})
    published_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'published_at', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    record_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'record_url' }})
    recruiters: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'recruiters' }})
    remote: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'remote' }})
    requisition_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'requisition_id' }})
    salary: Optional[JobSalary] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'salary' }})
    sequence: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sequence' }})
    slug: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'slug' }})
    status: Optional[shared.JobStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    tags: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tags' }})
    title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'title' }})
    updated_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'updated_at', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    updated_by: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'updated_by' }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'url' }})
    visibility: Optional[List[JobVisibilityEnum]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'visibility' }})
    
