from dataclasses import dataclass, field
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class Header:
    r"""Header
    The 5-tuple criteria for AWS Network Firewall to use to inspect packet headers in stateful traffic flow inspection. Traffic flows that match the criteria are a match for the corresponding <a>StatefulRule</a>. 
    """
    
    destination: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Destination') }})
    destination_port: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('DestinationPort') }})
    direction: StatefulRuleDirectionEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Direction') }})
    protocol: StatefulRuleProtocolEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Protocol') }})
    source: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Source') }})
    source_port: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('SourcePort') }})
    
