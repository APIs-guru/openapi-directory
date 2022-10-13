from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import connectorinstanceconfig


@dataclass_json
@dataclass
class ResolveInstanceConfigResponse:
    instance_config: Optional[connectorinstanceconfig.ConnectorInstanceConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'instanceConfig' }})
    
