from dataclasses import dataclass, field
from typing import Enum
from dataclasses_json import dataclass_json
from . import capabilitysyncstatus_enum


@dataclass_json
@dataclass
class GatewayCapabilitySummary:
    capability_namespace: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'capabilityNamespace' }})
    capability_sync_status: capabilitysyncstatus_enum.CapabilitySyncStatusEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'capabilitySyncStatus' }})
    
