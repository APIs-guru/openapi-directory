from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json

class ListingSettingsNamingEnum(str, Enum):
    LISTING = "LISTING"
    LISTINGS = "LISTINGS"
    INTEGRATIONS = "INTEGRATIONS"
    APPS = "APPS"
    CONNECTORS = "CONNECTORS"
    DATASOURCES = "DATASOURCES"
    ADDONS = "ADDONS"
    PLUGINS = "PLUGINS"
    PARTNERS = "PARTNERS"
    CHANNELS = "CHANNELS"
    CONNECTIONS = "CONNECTIONS"
    EXTENSIONS = "EXTENSIONS"

class ListingSettingsSidebarPositionEnum(str, Enum):
    TOP = "TOP"
    LEFT = "LEFT"
    RIGHT = "RIGHT"
    HIDDEN = "HIDDEN"


@dataclass_json
@dataclass
class ListingSettings:
    description_text_template: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description_text_template' }})
    description_title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description_title' }})
    features_text_template: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'features_text_template' }})
    features_title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'features_title' }})
    install_button_label: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'install_button_label' }})
    name_postfix: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name_postfix' }})
    naming: Optional[ListingSettingsNamingEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'naming' }})
    native_integration_link: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'native_integration_link' }})
    pricing_disabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pricing_disabled' }})
    pricing_text_template: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pricing_text_template' }})
    pricing_title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pricing_title' }})
    sidebar_position: Optional[ListingSettingsSidebarPositionEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sidebar_position' }})
    
