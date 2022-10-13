from dataclasses import dataclass, field
from typing import Enum
from dataclasses_json import dataclass_json
from . import subsctiptiontype_apppkg_enum


@dataclass_json
@dataclass
class SubscriptionsAppPkgSubscription:
    href: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'href' }})
    subsctiption_type: subsctiptiontype_apppkg_enum.SubsctiptionTypeAppPkgEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'subsctiptionType' }})
    
