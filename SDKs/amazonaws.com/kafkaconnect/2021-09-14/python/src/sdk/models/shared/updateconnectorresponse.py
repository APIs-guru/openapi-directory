from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import connectorstate_enum


@dataclass_json
@dataclass
class UpdateConnectorResponse:
    connector_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'connectorArn' }})
    connector_state: Optional[connectorstate_enum.ConnectorStateEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'connectorState' }})
    
