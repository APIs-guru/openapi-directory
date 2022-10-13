from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import aliasroutingconfiguration


@dataclass_json
@dataclass
class AliasConfiguration:
    alias_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AliasArn' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Description' }})
    function_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FunctionVersion' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Name' }})
    revision_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RevisionId' }})
    routing_config: Optional[aliasroutingconfiguration.AliasRoutingConfiguration] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RoutingConfig' }})
    
