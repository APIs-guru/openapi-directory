from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import root


@dataclass_json
@dataclass
class EnablePolicyTypeResponse:
    root: Optional[root.Root] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Root' }})
    
