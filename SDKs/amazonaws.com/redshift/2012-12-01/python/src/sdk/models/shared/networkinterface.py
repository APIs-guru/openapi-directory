from dataclasses import dataclass, field
from typing import Optional


@dataclass
class NetworkInterface:
    r"""NetworkInterface
    Describes a network interface. 
    """
    
    availability_zone: Optional[str] = field(default=None)
    network_interface_id: Optional[str] = field(default=None)
    private_ip_address: Optional[str] = field(default=None)
    subnet_id: Optional[str] = field(default=None)
    
