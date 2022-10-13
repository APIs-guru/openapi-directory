from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import humanloopdataattributes


@dataclass_json
@dataclass
class HumanLoopConfig:
    data_attributes: Optional[humanloopdataattributes.HumanLoopDataAttributes] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DataAttributes' }})
    flow_definition_arn: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FlowDefinitionArn' }})
    human_loop_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'HumanLoopName' }})
    
