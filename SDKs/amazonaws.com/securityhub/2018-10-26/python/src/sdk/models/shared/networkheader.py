from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import networkpathcomponentdetails
from . import networkpathcomponentdetails


@dataclass_json
@dataclass
class NetworkHeader:
    destination: Optional[networkpathcomponentdetails.NetworkPathComponentDetails] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Destination' }})
    protocol: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Protocol' }})
    source: Optional[networkpathcomponentdetails.NetworkPathComponentDetails] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Source' }})
    
