from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import config


@dataclass_json
@dataclass
class Ingress:
    config: Optional[config.Config] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'config' }})
    
