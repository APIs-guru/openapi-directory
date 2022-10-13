from dataclasses import dataclass, field
from typing import Enum
from dataclasses_json import dataclass_json
from . import apppkgsubscriptioninfo_links
from . import apppkg_subscriptiontype_enum


@dataclass_json
@dataclass
class AppPkgSubscriptionInfo:
    links: apppkgsubscriptioninfo_links.AppPkgSubscriptionInfoLinks = field(default=None, metadata={'dataclasses_json': { 'field_name': '_links' }})
    callback_uri: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'callbackUri' }})
    id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    subscription_type: apppkg_subscriptiontype_enum.AppPkgSubscriptionTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'subscriptionType' }})
    
