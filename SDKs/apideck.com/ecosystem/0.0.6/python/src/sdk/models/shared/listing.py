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
class Listing:
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    slug: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('slug') }})
    automate_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('automate_id') }})
    blendr_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('blendr_id') }})
    card_background_color: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('card_background_color') }})
    card_background_image: Optional[File] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('card_background_image') }})
    categories: Optional[List[Category]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('categories') }})
    cloud_service_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cloud_service_id') }})
    collections: Optional[List[Collection]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('collections') }})
    combidesk_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('combidesk_id') }})
    created_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('created_at'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    detail_page_disabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('detail_page_disabled') }})
    external_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('external_id') }})
    features: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('features') }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    integromat_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('integromat_id') }})
    logo: Optional[Logo] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('logo') }})
    media: Optional[List[Media]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('media') }})
    meta_tag_description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('meta_tag_description') }})
    meta_tag_keywords: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('meta_tag_keywords') }})
    meta_tag_title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('meta_tag_title') }})
    microsoft_flow_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('microsoft_flow_id') }})
    native_integration: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('native_integration') }})
    native_integration_link: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('native_integration_link') }})
    partner: Optional[Partner] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('partner') }})
    piesync_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('piesync_id') }})
    pricing: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pricing') }})
    products: Optional[List[Product]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('products') }})
    published: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('published') }})
    published_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('published_at'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    screenshots: Optional[List[Screenshot]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('screenshots') }})
    segment_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('segment_id') }})
    sticky: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sticky') }})
    tag_line: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tag_line') }})
    third_party_integration: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('third_party_integration') }})
    third_party_integration_link: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('third_party_integration_link') }})
    translations: Optional[List[Translation]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('translations') }})
    tray_io_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tray_io_id') }})
    unify_connector_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('unify_connector_id') }})
    upcoming: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('upcoming') }})
    updated_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updated_at'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    zapier_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('zapier_id') }})
    
