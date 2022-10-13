from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import runconfiguration


@dataclass_json
@dataclass
class StartApplicationRequest:
    application_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ApplicationName' }})
    run_configuration: Optional[runconfiguration.RunConfiguration] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RunConfiguration' }})
    
