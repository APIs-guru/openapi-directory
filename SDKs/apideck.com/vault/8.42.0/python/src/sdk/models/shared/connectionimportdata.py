from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class ConnectionImportDataCredentials:
    access_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'access_token' }})
    expires_in: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'expires_in' }})
    issued_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'issued_at', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    refresh_token: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'refresh_token' }})
    

@dataclass_json
@dataclass
class ConnectionImportData:
    credentials: Optional[ConnectionImportDataCredentials] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'credentials' }})
    metadata: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'metadata' }})
    settings: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'settings' }})
    
