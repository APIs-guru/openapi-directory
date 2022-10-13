from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from . import naventry
from . import naventry
from . import naventry
from . import naventry


@dataclass_json
@dataclass
class Navigation:
    account: Optional[naventry.NavEntry] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'account' }})
    copyright: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'copyright' }})
    custom_fields: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'customFields' }})
    footer: Optional[naventry.NavEntry] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'footer' }})
    header: List[naventry.NavEntry] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'header' }})
    mobile: Optional[naventry.NavEntry] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'mobile' }})
    
