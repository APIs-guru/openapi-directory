from dataclasses import dataclass, field
from typing import List
from dataclasses_json import dataclass_json
from . import theme


@dataclass_json
@dataclass
class AppConfigDisplay:
    themes: List[theme.Theme] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'themes' }})
    
