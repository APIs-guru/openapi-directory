from dataclasses import dataclass, field
from typing import List
from dataclasses_json import dataclass_json
from . import language


@dataclass_json
@dataclass
class AppConfigI18n:
    languages: List[language.Language] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'languages' }})
    
