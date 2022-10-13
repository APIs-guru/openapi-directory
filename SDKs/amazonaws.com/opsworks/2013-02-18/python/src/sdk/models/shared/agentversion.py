from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import stackconfigurationmanager


@dataclass_json
@dataclass
class AgentVersion:
    configuration_manager: Optional[stackconfigurationmanager.StackConfigurationManager] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ConfigurationManager' }})
    version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Version' }})
    
