from dataclasses import dataclass, field
from typing import Enum,Optional
from sdk.models import shared


@dataclass
class ConnectorsFilter:
    status: Optional[shared.ConnectorStatusEnum] = field(default=None, metadata={'query_param': { 'field_name': 'status' }})
    unified_api: Optional[shared.UnifiedAPIIDEnum] = field(default=None, metadata={'query_param': { 'field_name': 'unified_api' }})
    
