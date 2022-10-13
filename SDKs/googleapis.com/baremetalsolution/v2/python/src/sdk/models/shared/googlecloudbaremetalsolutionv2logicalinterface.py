from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import logicalnetworkinterface


@dataclass_json
@dataclass
class GoogleCloudBaremetalsolutionV2LogicalInterface:
    interface_index: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'interfaceIndex' }})
    logical_network_interfaces: Optional[List[logicalnetworkinterface.LogicalNetworkInterface]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'logicalNetworkInterfaces' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    
