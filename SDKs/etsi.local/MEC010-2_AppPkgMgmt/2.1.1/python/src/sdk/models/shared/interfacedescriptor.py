from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from . import *


@dataclass
class InterfaceDescriptor:
    interface_type: InterfaceTypeEnum = field()
    dst_ip_address: Optional[str] = field(default=None)
    dst_mac_address: Optional[str] = field(default=None)
    src_mac_address: Optional[str] = field(default=None)
    tunnel_info: Optional[TunnelInfo] = field(default=None)
    
