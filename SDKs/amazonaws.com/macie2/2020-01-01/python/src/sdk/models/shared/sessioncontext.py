from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import sessioncontextattributes
from . import sessionissuer


@dataclass_json
@dataclass
class SessionContext:
    attributes: Optional[sessioncontextattributes.SessionContextAttributes] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'attributes' }})
    session_issuer: Optional[sessionissuer.SessionIssuer] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sessionIssuer' }})
    
