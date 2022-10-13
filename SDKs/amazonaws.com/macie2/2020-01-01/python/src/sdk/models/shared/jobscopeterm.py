from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import simplescopeterm
from . import tagscopeterm


@dataclass_json
@dataclass
class JobScopeTerm:
    simple_scope_term: Optional[simplescopeterm.SimpleScopeTerm] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'simpleScopeTerm' }})
    tag_scope_term: Optional[tagscopeterm.TagScopeTerm] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tagScopeTerm' }})
    
