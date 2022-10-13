from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

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
    app_store: Optional[PublisherProfileMobileApplicationAppStoreEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'appStore' }})
    external_app_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'externalAppId' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    
