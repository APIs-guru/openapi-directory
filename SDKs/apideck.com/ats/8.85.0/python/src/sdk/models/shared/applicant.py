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
class ApplicantSocialLinks:
    url: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    
class ApplicantWebsitesTypeEnum(str, Enum):
    PRIMARY = "primary"
    SECONDARY = "secondary"
    WORK = "work"
    PERSONAL = "personal"
    OTHER = "other"


@dataclass_json
@dataclass
class ApplicantWebsites:
    url: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    type: Optional[ApplicantWebsitesTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    

@dataclass_json
@dataclass
class ApplicantInput:
    addresses: Optional[List[Address]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('addresses') }})
    anonymized: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('anonymized') }})
    applications: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('applications') }})
    archived: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('archived') }})
    birthday: Optional[date] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('birthday'), 'encoder': utils.dateisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    confidential: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('confidential') }})
    coordinator_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('coordinator_id') }})
    cover_letter: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cover_letter') }})
    deleted: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deleted') }})
    emails: Optional[List[Email]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('emails') }})
    first_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('first_name') }})
    followers: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('followers') }})
    headline: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('headline') }})
    initials: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('initials') }})
    last_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('last_name') }})
    middle_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('middle_name') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    owner_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('owner_id') }})
    phone_numbers: Optional[List[PhoneNumber]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('phone_numbers') }})
    photo_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('photo_url') }})
    position_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('position_id') }})
    record_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('record_url') }})
    recruiter_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('recruiter_id') }})
    social_links: Optional[List[ApplicantSocialLinks]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('social_links') }})
    sources: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sources') }})
    stage_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('stage_id') }})
    tags: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tags') }})
    title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('title') }})
    websites: Optional[List[ApplicantWebsites]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('websites') }})
    

@dataclass_json
@dataclass
class Applicant:
    addresses: Optional[List[Address]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('addresses') }})
    anonymized: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('anonymized') }})
    applications: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('applications') }})
    archived: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('archived') }})
    birthday: Optional[date] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('birthday'), 'encoder': utils.dateisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    confidential: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('confidential') }})
    coordinator_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('coordinator_id') }})
    cover_letter: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cover_letter') }})
    created_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('created_at'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    created_by: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('created_by') }})
    cv_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cv_url') }})
    deleted: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deleted') }})
    deleted_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deleted_at'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    deleted_by: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deleted_by') }})
    emails: Optional[List[Email]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('emails') }})
    first_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('first_name') }})
    followers: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('followers') }})
    headline: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('headline') }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    initials: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('initials') }})
    job_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('job_url') }})
    last_interaction_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('last_interaction_at'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    last_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('last_name') }})
    middle_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('middle_name') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    owner_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('owner_id') }})
    phone_numbers: Optional[List[PhoneNumber]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('phone_numbers') }})
    photo_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('photo_url') }})
    position_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('position_id') }})
    record_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('record_url') }})
    recruiter_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('recruiter_id') }})
    rejected_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rejected_at'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    social_links: Optional[List[ApplicantSocialLinks]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('social_links') }})
    source_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('source_id') }})
    sourced_by: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sourced_by') }})
    sources: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sources') }})
    stage_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('stage_id') }})
    tags: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tags') }})
    title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('title') }})
    updated_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updated_at'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    updated_by: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updated_by') }})
    websites: Optional[List[ApplicantWebsites]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('websites') }})
    
