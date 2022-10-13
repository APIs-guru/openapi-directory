from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import deploymentcommandname_enum


@dataclass_json
@dataclass
class DeploymentCommand:
    args: Optional[dict[str, List[str]]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Args' }})
    name: deploymentcommandname_enum.DeploymentCommandNameEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Name' }})
    
