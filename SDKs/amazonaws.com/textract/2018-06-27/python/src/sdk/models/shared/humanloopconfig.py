from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class HumanLoopConfig:
    r"""HumanLoopConfig
    Sets up the human review workflow the document will be sent to if one of the conditions is met. You can also set certain attributes of the image before review. 
    """
    
    flow_definition_arn: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('FlowDefinitionArn') }})
    human_loop_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('HumanLoopName') }})
    data_attributes: Optional[HumanLoopDataAttributes] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DataAttributes') }})
    
