from dataclasses import dataclass, field
from typing import List
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class RuleDefinition:
    r"""RuleDefinition
    The inspection criteria and action for a single stateless rule. AWS Network Firewall inspects each packet for the specified matching criteria. When a packet matches the criteria, Network Firewall performs the rule's actions on the packet.
    """
    
    actions: List[str] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Actions') }})
    match_attributes: MatchAttributes = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('MatchAttributes') }})
    
