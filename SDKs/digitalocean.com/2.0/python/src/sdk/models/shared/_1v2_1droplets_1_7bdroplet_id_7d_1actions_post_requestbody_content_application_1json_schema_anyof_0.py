from dataclasses import dataclass, field
from typing import Any,Enum
from dataclasses_json import dataclass_json

class Onev21droplets1Percent7BdropletIDPercent7D1actionsPostRequestBodyContentApplication1jsonSchemaAnyOf0TypeEnum(str, Enum):
    ENABLE_BACKUPS = "enable_backups"
    DISABLE_BACKUPS = "disable_backups"
    REBOOT = "reboot"
    POWER_CYCLE = "power_cycle"
    SHUTDOWN = "shutdown"
    POWER_OFF = "power_off"
    POWER_ON = "power_on"
    RESTORE = "restore"
    PASSWORD_RESET = "password_reset"
    RESIZE = "resize"
    REBUILD = "rebuild"
    RENAME = "rename"
    CHANGE_KERNEL = "change_kernel"
    ENABLE_IPV6 = "enable_ipv6"
    SNAPSHOT = "snapshot"


@dataclass_json
@dataclass
class Onev21droplets1Percent7BdropletIDPercent7D1actionsPostRequestBodyContentApplication1jsonSchemaAnyOf0:
    type: Onev21droplets1Percent7BdropletIDPercent7D1actionsPostRequestBodyContentApplication1jsonSchemaAnyOf0TypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    
