from dataclasses import dataclass, field
from typing import Any,List,Optional


@dataclass
class AppExternalCpd:
    inherited_attributes: dict[str, Any] = field()
    virtual_network_interface_requirements: Optional[List[str]] = field(default=None)
    
