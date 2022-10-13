from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from . import linktype
from . import linktype
from . import linktype


@dataclass_json
@dataclass
class AppPkgInfoLinks:
    app_d: linktype.LinkType = field(default=None, metadata={'dataclasses_json': { 'field_name': 'appD' }})
    app_pkg_content: linktype.LinkType = field(default=None, metadata={'dataclasses_json': { 'field_name': 'appPkgContent' }})
    self: linktype.LinkType = field(default=None, metadata={'dataclasses_json': { 'field_name': 'self' }})
    
