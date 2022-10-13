from dataclasses import dataclass, field
from typing import Enum,Optional
from . import connectorstatus_enum
from . import unifiedapiid_enum


@dataclass
class ConnectorsFilter:
    status: Optional[connectorstatus_enum.ConnectorStatusEnum] = field(default=None, metadata={'query_param': { 'field_name': 'status' }})
    unified_api: Optional[unifiedapiid_enum.UnifiedAPIIDEnum] = field(default=None, metadata={'query_param': { 'field_name': 'unified_api' }})
    
