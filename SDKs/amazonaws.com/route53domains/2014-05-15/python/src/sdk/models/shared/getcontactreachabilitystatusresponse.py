from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import reachabilitystatus_enum


@dataclass_json
@dataclass
class GetContactReachabilityStatusResponse:
    domain_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'domainName' }})
    status: Optional[reachabilitystatus_enum.ReachabilityStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    
