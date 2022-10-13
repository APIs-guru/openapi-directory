from dataclasses import dataclass, field
from typing import Enum
from dataclasses_json import dataclass_json
from . import statefulruledirection_enum
from . import statefulruleprotocol_enum


@dataclass_json
@dataclass
class Header:
    destination: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Destination' }})
    destination_port: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DestinationPort' }})
    direction: statefulruledirection_enum.StatefulRuleDirectionEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Direction' }})
    protocol: statefulruleprotocol_enum.StatefulRuleProtocolEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Protocol' }})
    source: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Source' }})
    source_port: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SourcePort' }})
    
