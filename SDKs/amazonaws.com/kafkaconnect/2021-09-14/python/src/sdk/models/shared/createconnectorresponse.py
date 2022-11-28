from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class CreateConnectorResponse:
    connector_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('connectorArn') }})
    connector_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('connectorName') }})
    connector_state: Optional[ConnectorStateEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('connectorState') }})
    
