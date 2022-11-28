from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class PublisherProfileMobileApplicationAppStoreEnum(str, Enum):
    APP_STORE_TYPE_UNSPECIFIED = "APP_STORE_TYPE_UNSPECIFIED"
    APPLE_ITUNES = "APPLE_ITUNES"
    GOOGLE_PLAY = "GOOGLE_PLAY"
    ROKU = "ROKU"
    AMAZON_FIRE_TV = "AMAZON_FIRE_TV"
    PLAYSTATION = "PLAYSTATION"
    XBOX = "XBOX"
    SAMSUNG_TV = "SAMSUNG_TV"
    AMAZON = "AMAZON"
    OPPO = "OPPO"
    SAMSUNG = "SAMSUNG"
    VIVO = "VIVO"
    XIAOMI = "XIAOMI"


@dataclass_json
@dataclass
class PublisherProfileMobileApplication:
    r"""PublisherProfileMobileApplication
    A mobile application that contains a external app ID, name, and app store.
    """
    
    app_store: Optional[PublisherProfileMobileApplicationAppStoreEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('appStore') }})
    external_app_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('externalAppId') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    
