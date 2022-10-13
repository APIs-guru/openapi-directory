from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class UnlockconnectorRequestBody:
    chargestation: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'chargestation' }})
    connector: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'connector' }})
    

@dataclass
class UnlockconnectorRequest:
    request: UnlockconnectorRequestBody = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass_json
@dataclass
class Unlockconnector201ApplicationJSON:
    command: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'command' }})
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    ok: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ok' }})
    

@dataclass
class UnlockconnectorResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    unlockconnector_201_application_json_object: Optional[Unlockconnector201ApplicationJSON] = field(default=None)
    
