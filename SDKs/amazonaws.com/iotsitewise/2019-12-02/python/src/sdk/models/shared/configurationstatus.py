from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import configurationerrordetails
from . import configurationstate_enum


@dataclass_json
@dataclass
class ConfigurationStatus:
    error: Optional[configurationerrordetails.ConfigurationErrorDetails] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'error' }})
    state: configurationstate_enum.ConfigurationStateEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'state' }})
    
