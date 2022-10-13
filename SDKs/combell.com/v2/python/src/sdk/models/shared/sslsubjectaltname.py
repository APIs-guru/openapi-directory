from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import sslsubjectaltnametype_enum


@dataclass_json
@dataclass
class SslSubjectAltName:
    type: Optional[sslsubjectaltnametype_enum.SslSubjectAltNameTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'value' }})
    
