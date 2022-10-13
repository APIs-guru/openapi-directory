from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class LogOperation:
    id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    

@dataclass_json
@dataclass
class LogService:
    id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    
class LogUnifiedAPIEnum(str, Enum):
    CRM = "crm"
    LEAD = "lead"
    PROXY = "proxy"
    VAULT = "vault"
    ACCOUNTING = "accounting"
    HRIS = "hris"
    ATS = "ats"
    POS = "pos"
    FILE_STORAGE = "file-storage"
    SMS = "sms"


@dataclass_json
@dataclass
class Log:
    api_style: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'api_style' }})
    base_url: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'base_url' }})
    child_request: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'child_request' }})
    consumer_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'consumer_id' }})
    duration: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'duration' }})
    error_message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'error_message' }})
    execution: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'execution' }})
    has_children: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'has_children' }})
    http_method: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'http_method' }})
    id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    latency: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'latency' }})
    operation: LogOperation = field(default=None, metadata={'dataclasses_json': { 'field_name': 'operation' }})
    parent_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'parent_id' }})
    path: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'path' }})
    sandbox: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sandbox' }})
    service: LogService = field(default=None, metadata={'dataclasses_json': { 'field_name': 'service' }})
    source_ip: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'source_ip' }})
    status_code: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status_code' }})
    success: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'success' }})
    timestamp: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'timestamp' }})
    unified_api: LogUnifiedAPIEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'unified_api' }})
    
