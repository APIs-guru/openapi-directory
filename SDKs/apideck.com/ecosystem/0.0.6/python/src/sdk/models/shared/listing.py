from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import file
from . import category
from . import collection
from . import logo
from . import media
from . import partner
from . import product
from . import screenshot
from . import translation


@dataclass_json
@dataclass
class Listing:
    automate_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'automate_id' }})
    blendr_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'blendr_id' }})
    card_background_color: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'card_background_color' }})
    card_background_image: Optional[file.File] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'card_background_image' }})
    categories: Optional[List[category.Category]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'categories' }})
    cloud_service_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cloud_service_id' }})
    collections: Optional[List[collection.Collection]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'collections' }})
    combidesk_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'combidesk_id' }})
    created_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'created_at', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    detail_page_disabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'detail_page_disabled' }})
    external_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'external_id' }})
    features: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'features' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    integromat_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'integromat_id' }})
    logo: Optional[logo.Logo] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'logo' }})
    media: Optional[List[media.Media]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'media' }})
    meta_tag_description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'meta_tag_description' }})
    meta_tag_keywords: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'meta_tag_keywords' }})
    meta_tag_title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'meta_tag_title' }})
    microsoft_flow_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'microsoft_flow_id' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    native_integration: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'native_integration' }})
    native_integration_link: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'native_integration_link' }})
    partner: Optional[partner.Partner] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'partner' }})
    piesync_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'piesync_id' }})
    pricing: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pricing' }})
    products: Optional[List[product.Product]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'products' }})
    published: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'published' }})
    published_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'published_at', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    screenshots: Optional[List[screenshot.Screenshot]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'screenshots' }})
    segment_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'segment_id' }})
    slug: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'slug' }})
    sticky: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sticky' }})
    tag_line: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tag_line' }})
    third_party_integration: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'third_party_integration' }})
    third_party_integration_link: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'third_party_integration_link' }})
    translations: Optional[List[translation.Translation]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'translations' }})
    tray_io_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tray_io_id' }})
    unify_connector_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'unify_connector_id' }})
    upcoming: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'upcoming' }})
    updated_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'updated_at', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    zapier_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'zapier_id' }})
    
