from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import address
from . import email
from . import phonenumber


@dataclass_json
@dataclass
class ApplicantSocialLinks:
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    url: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'url' }})
    
class ApplicantWebsitesTypeEnum(str, Enum):
    PRIMARY = "primary"
    SECONDARY = "secondary"
    WORK = "work"
    PERSONAL = "personal"
    OTHER = "other"


@dataclass_json
@dataclass
class ApplicantWebsites:
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    type: Optional[ApplicantWebsitesTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    url: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'url' }})
    

@dataclass_json
@dataclass
class Applicant:
    addresses: Optional[List[address.Address]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'addresses' }})
    anonymized: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'anonymized' }})
    applications: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'applications' }})
    archived: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'archived' }})
    birthday: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'birthday', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    confidential: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'confidential' }})
    coordinator_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'coordinator_id' }})
    cover_letter: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cover_letter' }})
    created_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'created_at', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    cv_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cv_url' }})
    deleted: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'deleted' }})
    deleted_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'deleted_at', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    deleted_by: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'deleted_by' }})
    emails: Optional[List[email.Email]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'emails' }})
    first_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'first_name' }})
    followers: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'followers' }})
    headline: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'headline' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    initials: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'initials' }})
    job_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'job_url' }})
    last_interaction_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'last_interaction_at', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    last_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'last_name' }})
    middle_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'middle_name' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    owner_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'owner_id' }})
    phone_numbers: Optional[List[phonenumber.PhoneNumber]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'phone_numbers' }})
    photo_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'photo_url' }})
    position_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'position_id' }})
    record_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'record_url' }})
    recruiter_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'recruiter_id' }})
    rejected_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'rejected_at', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    social_links: Optional[List[ApplicantSocialLinks]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'social_links' }})
    source_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'source_id' }})
    sourced_by: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sourced_by' }})
    sources: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sources' }})
    stage_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'stage_id' }})
    tags: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tags' }})
    title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'title' }})
    updated_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'updated_at', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    websites: Optional[List[ApplicantWebsites]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'websites' }})
    
