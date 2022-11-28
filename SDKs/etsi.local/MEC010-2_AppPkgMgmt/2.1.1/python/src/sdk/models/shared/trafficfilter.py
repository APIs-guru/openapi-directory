from dataclasses import dataclass, field
from typing import List,Optional


@dataclass
class TrafficFilter:
    d_scp: Optional[int] = field(default=None)
    dst_address: Optional[List[str]] = field(default=None)
    dst_port: Optional[List[str]] = field(default=None)
    dst_tunnel_port: Optional[List[str]] = field(default=None)
    protocol: Optional[List[str]] = field(default=None)
    q_ci: Optional[int] = field(default=None)
    src_address: Optional[List[str]] = field(default=None)
    src_port: Optional[List[str]] = field(default=None)
    src_tunnel_address: Optional[List[str]] = field(default=None)
    src_tunnel_port: Optional[List[str]] = field(default=None)
    t_c: Optional[int] = field(default=None)
    tag: Optional[List[str]] = field(default=None)
    tgt_tunnel_address: Optional[List[str]] = field(default=None)
    
