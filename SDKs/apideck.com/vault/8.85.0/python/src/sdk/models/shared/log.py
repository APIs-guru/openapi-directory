from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class LogOperation:
    r"""LogOperation
    The request as defined in OpenApi Spec.
    """
    
    id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    

@dataclass_json
@dataclass
class LogService:
    r"""LogService
    Apideck service provider associated with request.
    """
    
    id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    
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
    api_style: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('api_style') }})
    base_url: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('base_url') }})
    child_request: bool = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('child_request') }})
    consumer_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('consumer_id') }})
    duration: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('duration') }})
    execution: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('execution') }})
    has_children: bool = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('has_children') }})
    http_method: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('http_method') }})
    id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    latency: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('latency') }})
    operation: LogOperation = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('operation') }})
    parent_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('parent_id') }})
    path: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('path') }})
    sandbox: bool = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('sandbox') }})
    service: LogService = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('service') }})
    status_code: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('status_code') }})
    success: bool = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('success') }})
    timestamp: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('timestamp') }})
    unified_api: LogUnifiedAPIEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('unified_api') }})
    error_message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('error_message') }})
    source_ip: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('source_ip') }})
    
