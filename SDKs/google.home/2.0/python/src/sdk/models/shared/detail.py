from dataclasses import dataclass, field
from typing import List
from dataclasses_json import dataclass_json
from . import iconlist
from . import locale
from . import timezone


@dataclass_json
@dataclass
class Detail:
    icon_list: List[iconlist.IconList] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'icon_list' }})
    locale: locale.Locale = field(default=None, metadata={'dataclasses_json': { 'field_name': 'locale' }})
    timezone: timezone.Timezone = field(default=None, metadata={'dataclasses_json': { 'field_name': 'timezone' }})
    
