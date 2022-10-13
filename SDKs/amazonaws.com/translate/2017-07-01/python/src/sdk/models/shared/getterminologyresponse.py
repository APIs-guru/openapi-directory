from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import terminologydatalocation
from . import terminologyproperties


@dataclass_json
@dataclass
class GetTerminologyResponse:
    terminology_data_location: Optional[terminologydatalocation.TerminologyDataLocation] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TerminologyDataLocation' }})
    terminology_properties: Optional[terminologyproperties.TerminologyProperties] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TerminologyProperties' }})
    
