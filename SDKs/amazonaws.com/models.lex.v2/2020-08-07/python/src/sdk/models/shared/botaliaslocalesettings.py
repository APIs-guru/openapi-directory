from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import codehookspecification


@dataclass_json
@dataclass
class BotAliasLocaleSettings:
    code_hook_specification: Optional[codehookspecification.CodeHookSpecification] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'codeHookSpecification' }})
    enabled: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'enabled' }})
    
