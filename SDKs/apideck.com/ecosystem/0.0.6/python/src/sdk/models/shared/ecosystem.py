from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class EcosystemMenuPositionEnum(str, Enum):
    TOP = "TOP"
    LEFT = "LEFT"
    RIGHT = "RIGHT"
    HIDDEN = "HIDDEN"

class EcosystemMenuStyleEnum(str, Enum):
    LIST = "LIST"
    PILL = "PILL"
    FILTER = "FILTER"

class EcosystemNavigationMobileMenuTypeEnum(str, Enum):
    ICON = "ICON"
    TEXT = "TEXT"


@dataclass_json
@dataclass
class Ecosystem:
    is_published: bool = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('is_published') }})
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    slug: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('slug') }})
    about: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('about') }})
    alternatives_background_color: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('alternatives_background_color') }})
    alternatives_color: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('alternatives_color') }})
    attribution: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('attribution') }})
    body_background_color: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('body_background_color') }})
    body_button_background_color: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('body_button_background_color') }})
    body_button_color: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('body_button_color') }})
    body_color: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('body_color') }})
    body_link_color: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('body_link_color') }})
    card_settings: Optional[CardSettings] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('card_settings') }})
    categories_count_badge: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('categories_count_badge') }})
    categories_show_max_items: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('categories_show_max_items') }})
    collections_count_badge: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('collections_count_badge') }})
    collections_title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('collections_title') }})
    create_link: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('create_link') }})
    created_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('created_at'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    cta_settings: Optional[CtaSettings] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cta_settings') }})
    custom_domain: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('custom_domain') }})
    custom_settings: Optional[CustomSettings] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('custom_settings') }})
    detail_pages_enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('detail_pages_enabled') }})
    footer_background_color: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('footer_background_color') }})
    footer_color: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('footer_color') }})
    google_site_verification_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('google_site_verification_id') }})
    hide_install_buttons: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('hide_install_buttons') }})
    home_page_collection_category_cards: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('home_page_collection_category_cards') }})
    home_page_show_all_listings: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('home_page_show_all_listings') }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    installation_request_flow_enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('installation_request_flow_enabled') }})
    integration_settings: Optional[IntegrationSettings] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('integration_settings') }})
    lead_form_settings: Optional[LeadFormSettings] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lead_form_settings') }})
    listing_settings: Optional[ListingSettings] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('listing_settings') }})
    masthead_settings: Optional[MastheadSettings] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('masthead_settings') }})
    menu_position: Optional[EcosystemMenuPositionEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('menu_position') }})
    menu_style: Optional[EcosystemMenuStyleEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('menu_style') }})
    meta_tag_settings: Optional[MetaTagSettings] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('meta_tag_settings') }})
    navigation_background_color: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('navigation_background_color') }})
    navigation_color: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('navigation_color') }})
    navigation_logo_post_fix: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('navigation_logo_post_fix') }})
    navigation_mobile_menu_type: Optional[EcosystemNavigationMobileMenuTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('navigation_mobile_menu_type') }})
    navigation_sticky: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('navigation_sticky') }})
    primary_color: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('primary_color') }})
    privacy_link: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('privacy_link') }})
    request_link: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('request_link') }})
    shadow_page_description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('shadow_page_description') }})
    shadow_pages_enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('shadow_pages_enabled') }})
    show_attribution_badge: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('show_attribution_badge') }})
    show_requested_listings: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('show_requested_listings') }})
    terms_link: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('terms_link') }})
    total_published_listings: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('total_published_listings') }})
    unify_application_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('unify_application_id') }})
    updated_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updated_at'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    utm_campaign: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('utm_campaign') }})
    website: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('website') }})
    zaps_menu_title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('zaps_menu_title') }})
    zaps_page_enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('zaps_page_enabled') }})
    
