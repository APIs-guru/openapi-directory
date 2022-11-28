from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class Product:
    agreement_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('agreement_name') }})
    application_website: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('application_website') }})
    credits_remaining: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('credits_remaining') }})
    download_limit: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('download_limit') }})
    download_limit_duration: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('download_limit_duration') }})
    download_limit_reset_utc_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('download_limit_reset_utc_date'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    download_requirements: Optional[DownloadRequirements] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('download_requirements') }})
    downloads_remaining: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('downloads_remaining') }})
    expiration_utc_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('expiration_utc_date'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    imagepack_resolution: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('imagepack_resolution') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    overage: Optional[OverageDetails] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('overage') }})
    status: Optional[ProductStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    team_credits: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('team_credits') }})
    type: Optional[ProductTypeResponseEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    
