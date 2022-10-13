from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from . import linktype


@dataclass_json
@dataclass
class AppPkgSubscriptionInfoLinks:
    self: linktype.LinkType = field(default=None, metadata={'dataclasses_json': { 'field_name': 'self' }})
    
