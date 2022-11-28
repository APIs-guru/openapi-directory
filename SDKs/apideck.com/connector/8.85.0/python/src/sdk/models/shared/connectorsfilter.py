from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from . import *


@dataclass
class ConnectorsFilter:
    status: Optional[ConnectorStatusEnum] = field(default=None, metadata={'query_param': { 'field_name': 'status' }})
    unified_api: Optional[UnifiedAPIIDEnum] = field(default=None, metadata={'query_param': { 'field_name': 'unified_api' }})
    
