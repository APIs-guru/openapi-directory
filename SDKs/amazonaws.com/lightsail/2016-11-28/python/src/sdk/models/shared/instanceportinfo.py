from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class InstancePortInfo:
    r"""InstancePortInfo
    Describes information about ports for an Amazon Lightsail instance.
    """
    
    access_direction: Optional[AccessDirectionEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('accessDirection') }})
    access_from: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('accessFrom') }})
    access_type: Optional[PortAccessTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('accessType') }})
    cidr_list_aliases: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cidrListAliases') }})
    cidrs: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cidrs') }})
    common_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('commonName') }})
    from_port: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fromPort') }})
    ipv6_cidrs: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ipv6Cidrs') }})
    protocol: Optional[NetworkProtocolEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('protocol') }})
    to_port: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('toPort') }})
    
