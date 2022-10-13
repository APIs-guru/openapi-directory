from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import logo
from . import translation


@dataclass_json
@dataclass
class Category:
    count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'count' }})
    created_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'created_at', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    listing_description_text_template: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'listing_description_text_template' }})
    listing_features_text_template: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'listing_features_text_template' }})
    listing_pricing_text_template: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'listing_pricing_text_template' }})
    logo: Optional[logo.Logo] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'logo' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    slug: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'slug' }})
    translations: Optional[List[translation.Translation]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'translations' }})
    updated_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'updated_at', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    
