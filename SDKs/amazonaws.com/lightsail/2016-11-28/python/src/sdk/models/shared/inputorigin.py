from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import originprotocolpolicyenum_enum
from . import regionname_enum


@dataclass_json
@dataclass
class InputOrigin:
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    protocol_policy: Optional[originprotocolpolicyenum_enum.OriginProtocolPolicyEnumEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'protocolPolicy' }})
    region_name: Optional[regionname_enum.RegionNameEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'regionName' }})
    
