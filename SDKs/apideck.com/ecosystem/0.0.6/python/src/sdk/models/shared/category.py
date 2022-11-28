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
class Category:
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    slug: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('slug') }})
    count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('count') }})
    created_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('created_at'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    listing_description_text_template: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('listing_description_text_template') }})
    listing_features_text_template: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('listing_features_text_template') }})
    listing_pricing_text_template: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('listing_pricing_text_template') }})
    logo: Optional[Logo] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('logo') }})
    translations: Optional[List[Translation]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('translations') }})
    updated_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updated_at'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    
