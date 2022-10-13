from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class AppConfigGeneral:
    currency_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'currencyCode' }})
    custom_fields: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'customFields' }})
    default_time_zone: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'defaultTimeZone' }})
    facebook_app_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'facebookAppId' }})
    ga_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'gaToken' }})
    item_image_types: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'itemImageTypes' }})
    mandatory_sign_in: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'mandatorySignIn' }})
    max_user_rating: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'maxUserRating' }})
    stripe_key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'stripeKey' }})
    website_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'websiteUrl' }})
    
