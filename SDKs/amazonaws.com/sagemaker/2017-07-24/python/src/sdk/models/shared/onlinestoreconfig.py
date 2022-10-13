from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import onlinestoresecurityconfig


@dataclass_json
@dataclass
class OnlineStoreConfig:
    enable_online_store: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EnableOnlineStore' }})
    security_config: Optional[onlinestoresecurityconfig.OnlineStoreSecurityConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SecurityConfig' }})
    
