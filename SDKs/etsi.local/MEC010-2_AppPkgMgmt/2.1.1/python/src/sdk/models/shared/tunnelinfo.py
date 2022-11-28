from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from . import *


@dataclass
class TunnelInfo:
    tunnel_dst_address: str = field()
    tunnel_src_address: str = field()
    tunnel_type: TunnelTypeEnum = field()
    tunnel_specific_data: Optional[str] = field(default=None)
    
