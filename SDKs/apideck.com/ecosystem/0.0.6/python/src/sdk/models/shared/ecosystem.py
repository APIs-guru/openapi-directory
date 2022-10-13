from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import cardsettings
from . import ctasettings
from . import customsettings
from . import integrationsettings
from . import leadformsettings
from . import listingsettings
from . import mastheadsettings
from . import metatagsettings

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
    about: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'about' }})
    alternatives_background_color: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'alternatives_background_color' }})
    alternatives_color: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'alternatives_color' }})
    attribution: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'attribution' }})
    body_background_color: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'body_background_color' }})
    body_button_background_color: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'body_button_background_color' }})
    body_button_color: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'body_button_color' }})
    body_color: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'body_color' }})
    body_link_color: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'body_link_color' }})
    card_settings: Optional[cardsettings.CardSettings] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'card_settings' }})
    categories_count_badge: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'categories_count_badge' }})
    categories_show_max_items: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'categories_show_max_items' }})
    collections_count_badge: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'collections_count_badge' }})
    collections_title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'collections_title' }})
    create_link: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'create_link' }})
    created_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'created_at', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    cta_settings: Optional[ctasettings.CtaSettings] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cta_settings' }})
    custom_domain: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'custom_domain' }})
    custom_settings: Optional[customsettings.CustomSettings] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'custom_settings' }})
    detail_pages_enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'detail_pages_enabled' }})
    footer_background_color: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'footer_background_color' }})
    footer_color: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'footer_color' }})
    google_site_verification_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'google_site_verification_id' }})
    hide_install_buttons: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'hide_install_buttons' }})
    home_page_collection_category_cards: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'home_page_collection_category_cards' }})
    home_page_show_all_listings: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'home_page_show_all_listings' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    installation_request_flow_enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'installation_request_flow_enabled' }})
    integration_settings: Optional[integrationsettings.IntegrationSettings] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'integration_settings' }})
    is_published: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'is_published' }})
    lead_form_settings: Optional[leadformsettings.LeadFormSettings] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lead_form_settings' }})
    listing_settings: Optional[listingsettings.ListingSettings] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'listing_settings' }})
    masthead_settings: Optional[mastheadsettings.MastheadSettings] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'masthead_settings' }})
    menu_position: Optional[EcosystemMenuPositionEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'menu_position' }})
    menu_style: Optional[EcosystemMenuStyleEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'menu_style' }})
    meta_tag_settings: Optional[metatagsettings.MetaTagSettings] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'meta_tag_settings' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    navigation_background_color: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'navigation_background_color' }})
    navigation_color: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'navigation_color' }})
    navigation_logo_post_fix: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'navigation_logo_post_fix' }})
    navigation_mobile_menu_type: Optional[EcosystemNavigationMobileMenuTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'navigation_mobile_menu_type' }})
    navigation_sticky: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'navigation_sticky' }})
    primary_color: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'primary_color' }})
    privacy_link: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'privacy_link' }})
    request_link: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'request_link' }})
    shadow_page_description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'shadow_page_description' }})
    shadow_pages_enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'shadow_pages_enabled' }})
    show_attribution_badge: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'show_attribution_badge' }})
    show_requested_listings: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'show_requested_listings' }})
    slug: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'slug' }})
    terms_link: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'terms_link' }})
    total_published_listings: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'total_published_listings' }})
    unify_application_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'unify_application_id' }})
    updated_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'updated_at', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    utm_campaign: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'utm_campaign' }})
    website: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'website' }})
    zaps_menu_title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'zaps_menu_title' }})
    zaps_page_enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'zaps_page_enabled' }})
    
